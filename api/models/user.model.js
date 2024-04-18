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
    googlePhotoURL:{
        type:String,
        default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    }
},{timestamps:true});

export const userModel = mongoose.model('User', userSchema);