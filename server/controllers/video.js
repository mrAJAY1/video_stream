import { createError } from "../error.js";
import Video from "../models/video.js"

export const addVideo =async (req,res) => {
    const newVideo = new Video({userId:req.user.id,...req.body});
    try{
        const saveVideo = await newVideo.save();
        res.status(200).json(saveVideo);
    }catch(err){
        next(err)
    }
}
export const deleteVideo = async(req,res,next) => {
    try{
        const video =await Video.findById(req.params.id);
        if(!video) return next(createError(404,"video not found"));
        if(req.user.id === video.userId){
            await Video.findByIdAndDelete(req.params.id);
            res.status(200).json("video has been deleted")
        }else{
            return next(createError(403,"you can only delete your video !"))
        }
    }catch(err){
        next(err)
    }
}
export const getVideo = async (req,res,next) => {
    try{
        const video = await Video.findById(req.params.id);
        res.status(200).json(video);
    }catch(err){
        next(err);
    }
}

export const addView = async(req,res,next) => {
    try{
        await Video.findByIdAndUpdate(req.params.id,{
            $inc:{views:1}
        })
        res.status(200).json("the view has been increased");
    }catch(err){
        next(err)
    }
}

export const findTrends = async(req,res,next) => {
    try{
        const videos = await Video.find().sort({views:-1});
        res.status(200).json(videos);
    }catch(err){
        next(err)
    }
}
export const search = async(req,res,next) => {
    const query = req.query.q
    try{
        const videos = await Video
        .find({title:{$regex:query,$option:"i"}})
        .limit(40).sort({views:-1});
        res.status(200).json(videos);
    }catch(err){
        next(err)
    }
}