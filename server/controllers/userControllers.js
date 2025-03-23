import User from "../models/userModel.js";
import bcrypt from 'bcrypt';
import apiResponse from "../utils/apiResponse.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userLogin = async(req, res) => {
    try {
        const {username, password} = req.body;
        if(!username || !password)
        {
           return res.status(apiResponse.bad_request_code).json({message: "Enter all credentials"});
        }

        const user = await user.findOne({username : username});
        if(!user)
        {
            return res.status(apiResponse.not_found_code).json({message: "User not found"});
        }
        const userPassword = user.password;

        const isPassswordCorrect = await bcrypt.compare(userPassword, password);
        if(!isPassswordCorrect)
        {
            return res.status(apiResponse.unauthorized_code).json({message: "Password is wrong"});
        }


        const token = jwt.sign({username: username}, `${process.env.PRIVATE_KEY}`, {expiresIn: '1h'});
        console.log(token);

        return res.status(apiResponse.success_code).json({message: "LoggedIn Successfully", token: token});

    } catch (error) {
        console.log("Error from catch block of login user", error);
        res.status(apiResponse.internal_error_code).json({message:"Internal Server error", error: error});
    }
}

const signUp = async(req, res) => {
    try {
        const {username, email, password} = req.body;

        const salt = 10;
        const hashed_password = bcrypt.hash(password, salt);

        const newUser = new User({
            username : username, 
            email : email,
            password : hashed_password
        });

        await newUser.save();
        const token = jwt.sign({useraname: username}, `${process.env.PRIVATE_KEY}`, {expiresIn: '1h'});
        console.log("token while signup", token);

        return res.status(apiResponse.created_code).json({message: "User Created Successfully", token: token});

    } catch (error) {
        console.log("This is error from error", error);
        res.status(apiResponse.internal_error_code).json({message: "Internal Server error"});
    }
}



export {userLogin , signUp}