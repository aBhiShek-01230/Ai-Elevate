import mongoose from "mongoose";

const connectDB = async () =>{

  mongoose.connection.on('connected',()=>{
    console.log("DB Connected");
  })

  await mongoose.connect("mongodb+srv://abhishek911783:abhishek3318@cluster0.rqxeq.mongodb.net/virtualLab")
      

}

export default connectDB;