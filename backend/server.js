import express from "express";
import dotenv from 'dotenv';
import userRoutes from './Routes/userRoutes.js';
import {notFound, errorHandler} from './Middleware/errorMiddleware.js'
import db from './config/db.js'

dotenv.config();
const port=process.env.PORT;

const app=express();

app.use(express.json());
app.use(express.urlencoded())

app.use('/api/users',userRoutes)
app.get('/',(req,res)=>{
    res.send('server is ready')
})
app.use(notFound);
app.use(errorHandler);

db()
app.listen(port,()=>{
    console.log("server is running...")
})