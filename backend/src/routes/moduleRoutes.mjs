import express from 'express'
import Module from '../models/Module.mjs'
import Lesson from '../models/Lesson.mjs';
import { protect, requireAdmin } from '../middleware/auth.mjs';

const moduleRouter=express.Router();

//GET /api/modules (any logged in user can view modules)
moduleRouter.get('/', protect, async (req,res)=>{
    try{
        const modules= await Module.find().sort({order:1})
        return res.status(200).json({modules})
    }catch(err){
        console.log('Get modules error',err)
        return res.status(500).json({message:'Internal server error'})
    }
})

//GET /api/modules/:id/lessons (get all lessons in a module)
moduleRouter.get('/:id/lessons', protect, async (req,res)=>{
    try{
        const lessons= await Lesson.find({moduleId:req.params.id}).sort({order:1})
        return res.status(200).json({lessons})
    }catch(err){
        console.log('Get module lessons error',err)
        return res.status(500).json({message:'Internal server error'})
    }
})

//POST /api/modules (admin only)
moduleRouter.post('/', protect, requireAdmin, async (req,res)=>{
    try{
        const {title,description,order}= req.body
        
        if(!title||!description||order ===undefined){
            return res.status(400).json({message:"Title, description and order are required"})
        }

        const module=await Module.create({title,description,order})

        return res.status(201).json({message:"Module created successfully!",module})
    }catch(err){
        console.log('Create modules error',err)
        return res.status(500).json({message:'Internal server error'})
    }
})

export default moduleRouter