import jwt from "jsonwebtoken";
import apiResponse from "../utils/apiResponse.js";
const Verify = async(req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if(!token)
        {
            return res.status(apiResponse.unauthorized_code).json({message: "No token provided"});
        }

        const decoded_user = jwt.verify(token, process.env.PRIVATE_KEY);

        // console.log("This is decodedd user", decoded_user);

        req.user = decoded_user;

        // console.log(req.user.id)


        next();
    } catch (error) {
        console.log("Error from catch block of middleware");
        return res.status(apiResponse.internal_error_code).json({message : "Internal Server error"});
    }
}

export default Verify;
