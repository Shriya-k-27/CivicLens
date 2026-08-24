import jwt from 'jsonwebtoken'

export const protect= (req,res,next)=>{
    try{
        const authHeader= req.headers.authorization

        if(!authHeader){
            return res.status(401).json({
                message:"Unauthorized"
            })
        }

        const [scheme,token]=authHeader.split(" ");

        if(scheme !== "Bearer" || !token){
            return res.status(401).json({
                message: "Unauthorized"
            })
        }

        //verify the jwt
        const decoded=jwt.verify(token,process.env.JWT_SECRET)

        req.user=decoded;
        next();
    }catch(err){
        console.log("Authentication error: ",err.message);
        
        return res.status(401).json({
            message:"Unauthorized"
        })
    }

}

export const requireAdmin=(req,res,next)=>{
    if(req.user.role !== "admin"){
        return res.status(403).json({
            message: "Forbidden"
        })
    }
    next();
}