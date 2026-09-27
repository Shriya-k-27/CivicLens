import express from 'express'
import mongoose from 'mongoose'
import Module from '../models/Module.mjs'
import UserProgress from '../models/UserProgress.mjs'
import Lesson from '../models/Lesson.mjs';
import { protect, requireAdmin } from '../middleware/auth.mjs';
import User from '../models/User.mjs';
import { updateStreak } from '../utils/streak.mjs';

const lessonRouter=express.Router();

//GET /api/lessons/:id (any logged in user can view single lesson)
lessonRouter.get('/:id', protect, async (req,res)=>{
    try{
        const lesson= await Lesson.findById(req.params.id)

        if(!lesson){
            return res.status(404).json({message:"lesson not found"})
        }
        return res.status(200).json({lesson})
    }catch(err){
        console.log('Get lesson error',err)
        return res.status(500).json({message:'Internal server error'})
    }
})

//POST /api/lessons (admin only)
lessonRouter.post('/', protect, requireAdmin, async (req,res)=>{
    try{
        const {moduleId,title,order,content} = req.body;

        
        if(!moduleId||!title||!content||order ===undefined){
            return res.status(400).json({message:"Module ID, title, order and content are required"})
        }

        const moduleExists=await Module.findById(moduleId)
        if(!moduleExists){
            return res.status(404).json({message:"Referenced module does not exist"})
        }

        const lesson=await Lesson.create({moduleId,title,order,content})
        return res.status(201).json({message:"Lesson created successfully!",lesson})
    }catch(err){
        console.log('Create lesson error',err)
        return res.status(500).json({message:'Internal server error'})
    }
})

//PUT /api/modules/:id (admin only)
lessonRouter.put('/:id', protect, requireAdmin, async (req,res)=>{
    try{
        const {title,order,content}= req.body
        
        if(!title||!content||order ===undefined){
            return res.status(400).json({message:"Title,order and content are required"})
        }

        const lesson=await Lesson.findByIdAndUpdate(
            req.params.id,{title,order,content},{new:true,runValidators:true}
        )
        if(!lesson){
            return res.status(404).json({message:'Lesson not found'})
        }

        return res.status(200).json({message:"Lesson updated successfully!",lesson})
    }catch(err){
        console.log('Update lesson error',err)
        return res.status(500).json({message:'Internal server error'})
    }
})

//DELETE /api/lessons/:id (admin onli)
lessonRouter.delete('/:id', protect, requireAdmin, async (req,res)=>{
    try{
        const lesson= await Lesson.findById(req.params.id)

        if(!lesson){
            return res.status(404).json({message:'Lesson not found'})
        }

        await Lesson.findByIdAndDelete(req.params.id);

        return res.status(200).json({message:"Lesson deleted successfully!",lesson})
    }catch(err){
        console.log('Delete lesson error',err)
        return res.status(500).json({message:'Internal server error'})
    }
})

//POST /api/lessons/:lessonId/complete
lessonRouter.post('/:lessonId/complete',protect,async(req,res)=>{
    try{
        const {lessonId}=req.params;
        const {userId}=req.user;

        if(!mongoose.Types.ObjectId.isValid(lessonId)){
            return res.status(400).json({
                message:"Invalid lesson ID"
            });
        }

        const lesson=await Lesson.findById(lessonId);

        if(!lesson){
            return res.status(404).json({
                message:"Lesson not found"
            });
        }

        const user=await User.findById(userId);

        if(!user){
            return res.status(404).json({
                message:"User not found"
            });
        }

        updateStreak(user);

        const progress=await UserProgress.findOneAndUpdate(
            {userId,lessonId},
            {
                completed:true,
                completedAt:new Date()
            },
            {
                upsert:true,
                new:true,
                setDefaultsOnInsert:true
            }
        );

        await user.save();

        return res.status(200).json({
            message:'Lesson marked completed',
            progress,
            streakCount:user.streakCount
        });

    }catch(err){
        console.log('Error completing lesson:',err);

        return res.status(500).json({
            message:'Server error'
        });
    }
});

export default lessonRouter