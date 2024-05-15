import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()

mongoose
.connect(process.env.MONGO_URL).then(
    ()=>{
        console.log("MongoDB is connected");
    }
)
.catch(
    (err)=>{
        console.log(err);
    }
)

const app = express();

app.listen(4000, ()=>{
    console.log("Server is running on port 4000!");
})