import mongoose, { trusted } from "mongoose";

const civicUpdateSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true
    },
    source:{
        type:String,
        required:true,
        unique: true
    },
    publishedAt:{
        type:Date,
        required:true
    }
},
{
    timestamps:true
})

const CivicUpdate = mongoose.model("CivicUpdate", civicUpdateSchema);
export default CivicUpdate;