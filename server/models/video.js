import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    title:{
        type:String
    },
    imgUrl:{
        type:String,
        required:true,
    },
    videoUrl:{
        type:String,
        required:true
    },
    views:{
        type:Number,
        default:0
    },
    tags:{
        type:[String],
        default:[]
    },
},
{
    timestamps:true
});

export default mongoose.model("video",videoSchema);
