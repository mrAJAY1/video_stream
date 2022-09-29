import { Router } from "express";
import {} from '../controllers/userController.js'
const router = Router();

router.get('/',(req,res)=>{
    res.send("hello there");
})


export default router;