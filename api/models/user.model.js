import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    profilePicture:{
        type: String,
        default: 'https://www.pngkey.com/png/full/202-2024792_profile-icon-png.png'
    } 
    }, {timestamps: true}

);

const User = mongoose.model('User', userSchema);

export default User;