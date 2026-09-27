import mongoose from "mongoose"

const userProgressSchema= mongoose.Schema({ 
    userId: {type:mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    lessonId: {type:mongoose.Schema.Types.ObjectId, ref: 'Lesson', required: true},
    completed: {type:Boolean, required:true,default: false}, 
    completedAt: {type:Date},   
},{timestamps:true})

userProgressSchema.index({userId:1,lessonId:1},{unique:true})
const UserProgress= mongoose.model("UserProgress",userProgressSchema)
export default UserProgress;