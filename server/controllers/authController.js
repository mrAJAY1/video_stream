import mongoose from "mongoose"
import { createError } from "../error.js";
import { compare } from "bcrypt";
import User from '../models/user.js'
import jwt from 'jsonwebtoken'

export const signup = async(req,res,next) => {
    try{
        const newUser = new User(req.body);
       const user =  await newUser.save()
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET);
        const {password,__v,...result} = user._doc
        res.cookie("access_token",token,{
            httpOnly:true
           }).status(200).json(result);
    }catch(error){
        next(error)
    }
}
export const signin = async(req,res,next) => {
    const {name} = req.body
    const candidatePassword = req.body.password;
    try{
        const user  = await User.findOne({name:name});
        if(!user) return next(createError(404,"user not found"));
        console.log(user);
        console.log(candidatePassword)
       const isCorrect = await compare(candidatePassword,user.password);
       if(!isCorrect) return next(createError(400,"wrong credentials"))
       const {password,...newUser} = user._doc;
       const token = jwt.sign({id:user._id},process.env.JWT_SECRET);
       res
       .cookie("access_token",token,{
        httpOnly:true
       })
       .status(200)
       .json(newUser)
    }catch(error){
        next(error)
    }
}