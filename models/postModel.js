import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    post:{
        type:String,
        require:true
    },
    user:{
        type:String,
        require:true
    },
    heading:{
        type:String,
        require:true
    },
    img:{
        type:String
    }
},{timestamps:true})


export default mongoose.model("post",postSchema)