import mongoose from "mongoose"

//note: hearts default is 5
const userSchema= mongoose.Schema({ 
    email: {type:String, required: true, unique: true},
    passwordHash: {type:String, required: true},
    role: {type:String, enum:['user','admin'],default: 'user'}, 
    xp: {type:Number, default: 0},
    streakCount: {type:Number, default: 0},
    lastActiveDate: Date,
    hearts: {type:Number, default: 5} ,
    badges:{type:[String], default: []}    
},{timestamps:true})

const User= mongoose.model("User",userSchema)
export default User;