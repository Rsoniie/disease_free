import mongoose from 'mongoose';
import apiResponse from '../utils/apiResponse.js';
import dbName  from '../constants.js';

const uri = process.env.MONGO_URI;
console.log("this is mongodb uri", uri)

const connectDb = async(req, res) => {
    try{
        const response = await mongoose.connect(`${uri}${dbName}`);
        console.log("Mongodb connected successfully");
    }catch(error)
    {
        console.log("Error in catch block of connectDB", error);
       return res.status(500).json({message :"Internal Server error"});
    }
}

export default connectDb;

