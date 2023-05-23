import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    post:{
        type:String,
        require:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
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