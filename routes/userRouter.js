import express from "express";
import {
    signup,
    checkLogin,
    submitPost,
    getPosts
} from "../controllers/userControllers.js"

import {
    verifyToken
} from '../middlewares/JWTmiddleWare.js'



const router = express.Router()


router.post('/signup',signup);
router.get('/checkLogin',verifyToken,checkLogin);
router.post('/submitPost',verifyToken,submitPost);
router.get('/getPosts',verifyToken,getPosts)



export default router 