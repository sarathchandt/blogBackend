import Posts from '../models/postModel.js';
import User from '../models/userModel.js'
import { createJwt } from '../middlewares/JWTmiddleWare.js';
import bcrypt from "bcrypt"
export async function signup(req, res){
    console.log(req.body);
    try{
        let user = await User.findOne({email:req.body.email});
        if(!user){
            let saltRounds = 11;

            bcrypt.genSalt(saltRounds, function (err, salt) {
                bcrypt.hash(req.body.password, salt, function (err, hash) {
                    let userDetails = new User({
                        fullName: req.body.FullName,
                        email: req.body.email,
                        password: hash,
                    })
                    userDetails.save()

                    const token = createJwt({
                        email: req.body.email,
                    })
                    let isUser = {
                        isLogin: false,
                        token: token,
                    }
                    res.status(200).json(isUser);

                });
            });
        }else{
            let isUser = {
                isLogin: true,
                token: null,
            }
            res.status(400).json(isUser);
        }
    }catch(err){
        res.status(500).json({something_wnt_wrong : true});
    }

}

export function checkLogin(req, res){
        res.status(200).json({isLogin:true})
}

export async function submitPost(req, res){
    try {       
            let user = await User.findOne({email:res.locals.userId})
            console.log(req.body);
            await Posts.create({
                post:req.body.post,
                heading:req.body.heading,
                img:req.body.img,
                user:user._id
            })
            res.status(200).json({posted:true})
    } catch (error) {
        res.status(500).json({something_wnt_wrong : true});
    }
}

export function getPosts(req, res){

}