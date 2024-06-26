import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken'

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === '' || password === '' || email === '') {
        next(errorHandler(400, "All fields are required"));
    }

    const hashedPassword = bcryptjs.hashSync(password, 10)

    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    });

    try {
        await newUser.save();
        res.json('Signup successful');
    } catch (error) {
        // res.status(500).json({ message: error.message })
        next(error)
    }
}

export const signin = async (req, res, next) =>{
    const { email, password } = req.body;

    if (!email || !password || email === '' || password === '') {
        next(errorHandler(400, 'All fields are required'));
    }

    try {
        const validUser = await User.findOne({email})
        if (!validUser) {
            return next(errorHandler(404, 'User not found'))
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) {
            return next(errorHandler(400, 'Invalid password'));
        }

        //add cokiee
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, {expiresIn: '3d'});

        const { password: pass, ...rest } = validUser._doc;  //// remove the password from the form/web page

        res.status(200)
        .cookie('access_token', token, {
            httpOnly: true,
        })
        .json(rest);
    } catch (error) {
        next(error)
    }
};

export const google = async (req, res, next) => {
    const { email, name, googlePhotoUrl } = req.body;
    console.log(email);
    console.log(name);
    console.log(googlePhotoUrl);
    try {
        const user = await User.findOne({ email });
        if (user) {
            //add cokiee
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
            const { password, ...rest } = user._doc;  //// remove the password from the form/web page
            res.status(200).cookie('access_token', token, {
                httpOnly: true,
            }).json(rest);
        } else {
            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
            const newUser = new User({
                //Manas Roy = manasroy4565
                username: name.toLowerCase().split(' ').join('') + Math.random().toString(9).slice(-4),
                email,
                password: hashedPassword,
                profilePicture: googlePhotoUrl
            });
            await newUser.save();
            const token = jwt.sign(
              { id: newUser._id },
              process.env.JWT_SECRET
            );
            const { password, ...rest } = newUser._doc;
            res
              .status(200)
              .cookie('access_token', token, {
                httpOnly: true,
              })
              .json(rest);
        }
    } catch (error) {
        next(error)
    }
};