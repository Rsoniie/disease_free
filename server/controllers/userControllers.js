import User from "../models/userModel.js";
import bcrypt from 'bcrypt';
import apiResponse from "../utils/apiResponse.js";

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

        

    } catch (error) {
        console.log("Error from catch block of login user", error);
        res.status(apiResponse.internal_error_code).json({message : apiResponse.internal_error_msg, error: error});
    }
}