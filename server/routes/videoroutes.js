import { Router } from "express";
import { addVideo, deleteVideo, findTrends, getVideo } from "../controllers/video.js";
import { verifyToken } from "../utils/verifyToken.js";
const router = Router();

router.post("/",verifyToken,addVideo);
router.get('/find/:id',getVideo);
router.get('/trends',findTrends);
router.get('/delete/:id',verifyToken,deleteVideo)

export default router;