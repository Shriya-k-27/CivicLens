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

//PUT /api/modules/:id (admin only)
moduleRouter.put('/:id', protect, requireAdmin, async (req,res)=>{
    try{
        const {title,description,order}= req.body
        
        if(!title||!description||order ===undefined){
            return res.status(400).json({message:"Title, description and order are required"})
        }

        const module=await Module.findByIdAndUpdate(
            req.params.id,{title,description,order},{new:true,runValidators:true}
        )
        if(!module){
            return res.status(404).json({message:'Module not found'})
        }

        return res.status(200).json({message:"Module updated successfully!",module})
    }catch(err){
        console.log('Update modules error',err)
        return res.status(500).json({message:'Internal server error'})
    }
})

//DELETE /api/modules/:id (admin onli)
moduleRouter.delete('/:id', protect, requireAdmin, async (req,res)=>{
    try{
        const module= await Module.findById(req.params.id)

        if(!module){
            return res.status(404).json({message:'Module not found'})
        }

        //Block deletion if the module still contains lessons
        const lessonsExist=await Lesson.exists({moduleId:req.params.id})

        if(lessonsExist){
            return res.status(409).json({message:"Cannot delete a module that contains lessons. Delete its lessons first."})
        }
        await Module.findByIdAndDelete(req.params.id);

        return res.status(200).json({message:"Module deleted successfully!",module})
    }catch(err){
        console.log('Delete modules error',err)
        return res.status(500).json({message:'Internal server error'})
    }
})

export default moduleRouter