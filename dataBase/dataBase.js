import mongoose from 'mongoose'

 export default { connect:  ()=>{
  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.DB).then(()=>{
    console.log("!!MONGO_CONNECTED!!");
  })
 }
   
}

  