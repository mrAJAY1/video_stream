import mongoose from "mongoose";
import {hash,genSalt,compare} from 'bcrypt'

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:'name is required',
        unique:true
    },
    password:{
        type:String,
        required:'password is required'
    },
})
userSchema.pre("save",async function(next){
    const user = this;
    if(this.isModified || this.isNew){
        const salt = await genSalt(10);
        const newPassword = await hash(user.password,salt)
        user.password = newPassword;
        next();
    }
   return next();
})
export default mongoose.model("users_stream",userSchema);