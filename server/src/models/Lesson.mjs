import mongoose from "mongoose";

const lessonSchema=mongoose.Schema({
    title:String, category:String, content: String
})

const Lesson= mongoose.model("Lesson",lessonSchema);
export default Lesson;