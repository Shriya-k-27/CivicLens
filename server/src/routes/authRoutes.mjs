import express from 'express';
import bcrypt from 'bcryptjs'
import User from "../models/User.mjs"
import jwt from 'jsonwebtoken'
import { protect } from "../middleware/auth.mjs"

const authRouter=express.Router();

authRouter.post('/register',async(req,res)=>{
    try{

        const {email,password}=req.body;

        if(!email || !password){
            return res.status(400).json({
                message: "Email and password required!"
            })
        }

        const existingUser=await User.findOne({email});

        if(existingUser){
            return res.status(409).json({
                message: "A user with this email already exists"
            })
        }

        //hashing the password
        //taking 10 salt rounds
        const passwordHash=await bcrypt.hash(password,10);

        //create the user
        const user=await User.create({email,passwordHash})

        const userResponse= user.toObject();
        delete userResponse.passwordHash;

        return res.status(201).json({
            message:"User registered successfully",
            user: userResponse
        })

    }catch(err){
        console.log("Registration error: ",err);

        return res.status(500).json({
            message: "Internal server error"
        })
    }
})

authRouter.post('/login',async (req,res)=>{
    try{
        const {email,password}=req.body;

        if(!email || !password){
            return res.status(400).json({
                message:"Email and password required"
            })
        }

        const user=await User.findOne({email})

        if(!user){
            return res.status(401).json({
                message: "Invalid credentials!"
            })
        }

        const passwordMatches=await bcrypt.compare(password,user.passwordHash)

        if(!passwordMatches){
            return res.status(401).json({
                message: "Invalid credentials!"
            })
        }
        
        //create JWT
        const accessToken=jwt.sign(
            {userId: user._id,
            role: user.role},process.env.JWT_SECRET,
            {expiresIn: "15m"}
        )

        const refreshToken=jwt.sign(
            {userId: user._id,
            role: user.role},process.env.JWT_REFRESH_SECRET,
            {expiresIn: "7d"}
        )

        res.cookie("refreshToken",refreshToken,{
            httpOnly:true,
            secure: process.env.NODE_ENV ==='production',
            sameSite: 'lax',
            maxAge: 7*24*60*60*1000
        })

        const userResponse=user.toObject();
        delete userResponse.passwordHash;

        return res.status(200).json({
            message:"Login successful",
            accessToken,
            user:userResponse
        })

    }catch(err){
        console.log("Login error: ",err);
        
        return res.status(500).json({
            message:"Internal server error"
        })
    }
})

authRouter.post('/refresh',async(req,res)=>{
    try{

        const refreshToken=req.cookies.refreshToken;

        if(!refreshToken){
            return res.status(401).json({
                message: "Refresh token missing!"
            })
        }

        const decoded=jwt.verify(refreshToken,process.env.JWT_REFRESH_SECRET)

        const accessToken=jwt.sign(
            {userId:decoded.userId,role:decoded.role},
            process.env.JWT_SECRET,
            {expiresIn: "15m"}
        )

        return res.status(200).json({
            accessToken
        })

    }catch(err){

        return res.status(403).json({
            message: "Invalid or expired refresh token"
        })
    }
})

authRouter.get("/me", protect, (req, res) => {
  return res.status(200).json({
    user: req.user,
  });
});

export default authRouter