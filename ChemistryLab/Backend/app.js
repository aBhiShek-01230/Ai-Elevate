import express from 'express'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoutes.js';
import dotenv from "dotenv";
import cors from 'cors'

//App config
dotenv.config();

connectDB();
connectCloudinary();

const app = express()

//middlewares
app.use(express.json());
app.use(cors())



//api endpoints
app.use('/api/user',userRouter)

app.get(('/'),(req,res)=>{
    res.send("Hello");
})
app.listen(1000,()=>{
  console.log('Server Started')
});