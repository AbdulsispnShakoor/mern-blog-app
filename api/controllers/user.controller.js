import CustomError from "../middlewares/customeError.js";
import { userModel } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';

export const registerController = asyncHandler(async (req, res,next) => {
    // console.log(req.body)

        const {name,email,password} = req.body;

        if(!name || !email || !password || name === " " || email === " " || password === " "){
            const error = new CustomError("please enter a valide data.", 400);
            return next(error);
        }
    
        const hashedPassword = bcrypt.hashSync(password,10);
        const newUser = await userModel.create({name,email,password:hashedPassword});

        res.status(201).json({
            status:"success",
            message:"register successfully",
            data:newUser.name
        })
 
    })
    
export const loginController = asyncHandler(async (req, res,next) => {
     
        
        const {email,password} = req.body;
    
        if(!email || !password || email === " " || password === " "){
            const error = new CustomError("All fields are required.", 400);
            return next(error);
        }
        
        const user = await userModel.findOne({email});
        if(!user){
            const error = new CustomError("User doesn't Exist Please Sign Up first.",404);
            return next(error);
        }
        
        const isMatch = bcrypt.compareSync(password,user.password);
        
        if(!isMatch){
            const error = new CustomError("email or password do not match! Please try again.",403);
            return next(error);
        }

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{
            expiresIn:"7d"
        });


  
        res.status(200).cookie("access-token", token,{
            httpOnly: true
        }).json({
            status:"success",
            message:"login successfully",
            user:{
                id:user._id,
                name:user.name,
                email:user.email
            }
        })
        
});

export const googleController = asyncHandler(async (req, res,next) => {


        const {name,email,googlePhotoURL} = req.body;

        if(!name || !email || !googlePhotoURL|| name === " " || email === " " || googlePhotoURL === " "){
            const error = new CustomError("please enter a valide data.", 400);
            return next(error);
        }
        // checking the user exist 
        const user = await userModel.findOne({email});
        if(user){
            const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{
                expiresIn:"7d"
            });
            const {password, ...rest} = user._doc;

            res.status(200).cookie("access-token", token,{
                httpOnly: true
            }).json({
                status:"success",
                message:"Google login successfully",
                user:rest
            })
        }else{
            const generatePassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const hashedPassword = bcrypt.hashSync(generatePassword,10);
            const newUser = new userModel({
                name:name.toLowerCase().split(' ').join('') + Math.random().toString(9).slice(-4),
                email,
                password:hashedPassword,
                googlePhotoURL
            });

            await newUser.save();
            const token = jwt.sign({id:newUser._id},process.env.JWT_SECRET,{
                expiresIn:"7d"
            });
            const  {password, ...rest} = newUser._doc;
            res.status(200).cookie("access_token", token,{
                httpOnly:true,
            }).json({
                status:"success",
                message:"Google registeration successful",
                user:rest
            });
        }
     
    
    })