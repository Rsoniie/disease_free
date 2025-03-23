import mongoose from 'mongoose';
import { internal_error_code, internal_error_message } from '../utils/apiResponse.js';
import { dbName } from '../constants.js';

const uri = process.env.MONGO_URI;

const connectDb = async(req, res) => {
    try{
        const response = await mongoose.connect(`${uri}${dbName}`);
        console.log("Mongodb connected successfully");
    }catch(error)
    {
        console.log("Error in catch block of connectDB", error);
        res.status(`${internal_error_code}`).json({message : `${internal_error_message}`});
    }
}

export default connectDb;

