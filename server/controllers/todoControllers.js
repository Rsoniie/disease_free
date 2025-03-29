import User from "../models/userModel.js";

const saveTodo = async (req, res) => {
    try {
        return res.status(200).json({message : "Successfully in saveTodo"});
    } catch (error) {
        return res.status(500).json({message: "Internal server error"});
    }
};

const getAll = async (req, res) => {
    try {
        return res.status(200).json({message : "Successfully getting All"});
    } catch (error) {
        return res.status(500).json({message: "Internal server error"});
    }
}


export {saveTodo, getAll};

