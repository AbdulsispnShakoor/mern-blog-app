import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "name is required."],
        trim:true,
        unique:[true, "name must be unique."]
    },
    email:{
        type:String,
        required:[true, "email is required."],
        trim:true,
        unique:[true, "email must be unique."]
    },
    password:{
        type:String,
        required:[true, "name is required."],
        trim:true
    },
},{timestamps:true});

export const userModel = mongoose.model('User', userSchema);