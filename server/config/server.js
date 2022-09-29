import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import {config} from 'dotenv';
import userRouter from '../routes/user.js';
import videoRouter from '../routes/videoroutes.js';
import authRouter from '../routes/auth.js';

const db = mongoose.connection;

config();
const app = express();
const { PORT, MONGO_URI } = process.env;
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin:"http://localhost:3000"
}));
mongoose.connect(MONGO_URI);
db.once("open",()=>{
    console.log("database connected")
})
db.on("error",console.error.bind(console,"mongodb connection error : "));


app.use('/api/user/',userRouter);
app.use('/api/video/',videoRouter);
app.use('/api/auth/',authRouter);

app.use((err,req,res,next)=>{
    const status = err.status || 500;
    const message = err.message || "something went wrong";
    return res.status(status).json({
        success:false,
        status,
        message
    })
})
app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`)
});