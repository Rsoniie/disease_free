import User from "../models/userModel.js";
import bcrypt from 'bcrypt';
import apiResponse from "../utils/apiResponse.js";
import jwt from 'jsonwebtoken';
import cookieParser from "cookie-parser";

const userLogin = async(req, res) => {
    try {
        const {username, password} = req.body;
        if(!username || !password)
        {
           return res.status(apiResponse.bad_request_code).json({message: "Enter all credentials"});
        }

        const user = await User.findOne({username : username});
        if(!user)
        {
            return res.status(apiResponse.not_found_code).json({message: "User not found"});
        }
        const userPassword = user.password;

        const isPassswordCorrect = await bcrypt.compare(password, userPassword);
        if(!isPassswordCorrect)
        {
            return res.status(apiResponse.unauthorized_code).json({message: "Password is wrong"});
        }


        const token = jwt.sign({id:user._id, username: username}, `${process.env.PRIVATE_KEY}`, {expiresIn: '1h'});
        console.log(token);

        return res.status(apiResponse.success_code).json({message: "LoggedIn Successfully", token: token});

    } catch (error) {
        console.log("Error from catch block of login user", error);
        return res.status(apiResponse.internal_error_code).json({message:"Internal Server error", error: error});
    }
}

const signUp = async(req, res) => {
    try {
        const {username, email, password} = req.body;
        const existing_user = await User.findOne({username:username});
        if(existing_user)
        {
            return res.status(apiResponse.already_exist).json({message : "Username already exist"});
        }
        const existing_email = await User.findOne({email: email});
        if(existing_email)
        {
            return res.status(apiResponse.already_exist).json({message: "email already exist"});
        }

        const salt =  await bcrypt.genSalt(10);
        const hashed_password = await bcrypt.hash(password, salt);

        const newUser = new User({
            username : username, 
            email : email,
            password : hashed_password
        });
        console.log("till new user done");

        await newUser.save();
        console.log("User created successfully");
        const token = jwt.sign({id:newUser._id, useraname: username}, `${process.env.PRIVATE_KEY}`, {expiresIn: '1h'});
        console.log("token while signup", token);
        res.cookie('auth_token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'Strict',
            maxAge: 3600000, 
        })

        return res.status(apiResponse.created_code).json({message: "User Created Successfully", token: token});

    } catch (error) {
        console.log("This is error from error", error);
        return res.status(apiResponse.internal_error_code).json({message: "Internal Server error"});
    }
}







export {userLogin , signUp}