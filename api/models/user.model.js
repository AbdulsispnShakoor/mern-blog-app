import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

});

export const userModel = mongoose.model('User', userSchema);