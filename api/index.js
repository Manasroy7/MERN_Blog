import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouters from './routes/user.route.js';
import authRouters from './routes/auth.route.js';

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
app.use(express.json());

app.listen(4000, ()=>{
    console.log("Server is running on port 4000!");
});

app.use('/api/user', userRouters)
app.use('/api/auth', authRouters) 

app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})