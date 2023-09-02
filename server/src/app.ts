import express from 'express';
import connectDB from './config/Database/connection';
import cors from 'cors'
const app = express();
const port = 3001
app.use(cors())
connectDB();
app.listen(port,()=>{
    console.log(`server listening on ${port}`)
})
