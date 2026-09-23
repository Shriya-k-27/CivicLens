import mongoose from "mongoose";

// const questionSchema= new mongoose.Schema(
//     {
//         prompt:{type:String,required:true,trim:true},
//         type:{type:String,enum:['mcq','truefalse'],required:true},
//         options:{type:[String],default:[]},
//         correctAnswer:{type:String,required:true,trim:true},
//         sourceCitation:{type:String,required:true,trim:true}
//     },
//     {_id:true}
// )
const lessonSchema=mongoose.Schema(
    {
        moduleId:{type:mongoose.Schema.Types.ObjectId,ref:'Module',required:true},
        title:{type:String,required:true,trim:true},
        order:{type:Number,required:true,min:1},
        content:{type:String,required:true},
    },
    {timestamps:true}
)


const Lesson= mongoose.model("Lesson",lessonSchema);
export default Lesson;