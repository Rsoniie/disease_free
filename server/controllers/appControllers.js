import mongoose from "mongoose";
import User from "../models/userModel.js";
import apiResponse from "../utils/apiResponse.js";
import analysis from '../utils/analysis.js';

const addTodo = async (req, res) => {
  try {
     
    const {todo_list} = req.body;

    if (!todo_list || todo_list.length === 0) {
      return res
        .status(apiResponse.bad_request_code)
        .json({ message: "No todos to add" });
    }

    const userId = req.user?.id;

    const user = await User.findById(userId);

    if (!user) {
      return res
        .status(apiResponse.not_found_code)
        .json({ message: "User not found" });
    }
    todo_list?.forEach((element) => {
        user.todo.push(element)
    });

    await user.save();

    return res.status(apiResponse.success_code).json({
      message: "Todos added successfully",
      data: user.todo,
    });
  } catch (error) {
    console.error("Error in addButton:", error);
    return res
      .status(apiResponse.internal_error_code)
      .json({ message: "Internal server error" });
  }
};

const analyzeForm = async (req, res) => {
  try {

    const { payload } = req.body;
    console.log("this is payload from analyze form", payload);
    const todo_list = await analysis(payload);
    return res
      .status(apiResponse.success_code)
      .json({ message: "analysis done", todo_list });
  } catch (error) {
    console.log("error from catch block of analyze form");
    return res.status(apiResponse.internal_error_code).json({message: "Internal server error"});
  }
};

export { addTodo, analyzeForm };
