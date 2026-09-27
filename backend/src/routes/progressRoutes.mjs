import express from 'express';
import Lesson from '../models/Lesson.mjs';
import UserProgress from '../models/UserProgress.mjs';
import { protect } from '../middleware/auth.mjs';

const progressRouter=express.Router();

// GET /api/progress/stats
progressRouter.get('/stats',protect,async (req,res)=>{
    try{
        const {userId}=req.user;

        const totalLessons=await Lesson.countDocuments();

        const completedCount=await UserProgress.countDocuments({
            userId,
            completed:true
        });

        const percentage=totalLessons===0
            ? 0
            : Math.round((completedCount/totalLessons)*100);

        return res.status(200).json({
            completedCount,
            totalLessons,
            percentage
        });

    }catch(err){
        console.log('Get progress stats error:',err);

        return res.status(500).json({
            message:'Server error'
        });
    }
});

export default progressRouter;