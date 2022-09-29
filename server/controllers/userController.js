import Video from "../models/video.js";

export const like = async(req,res,next) => {
    const id = req.user.id;
    const videoId = req.user.videoId;
    try{
        await Video.findByIdAndUpdate(videoId,{
            $addToSet:{likes:id},
            $pull:{dislikes:id}
        });
        res.status(200).json("the video has been liked")
    }catch(err){
        next(err);
    }
} 
export const dislike = async(req,res,next) => {
    const id = req.user.id;
    const videoId = req.user.videoId;

    try{
        await Video.findByIdAndUpdate(videoId,{
            $addToSet:{dislikes:id},
            $pull:{likes:id}
        });
        res.status(200).json("the video has been liked")
    }catch(err){
        next(err);
    }
} 