import mongoose from 'mongoose'

const moduleSchema= new mongoose.Schema(
    {
        title:{type:String,required:true,trim:true},
        description:{type:String,required:true,trim:true},
        order:{type:Number,required:true,min:1},
    },
    {timestamps:true}
)

const Module=mongoose.model('Module',moduleSchema)

export default Module;

