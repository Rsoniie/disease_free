import User from "../models/userModel.js";

const saveTodo = async (req, res) => {
  try {
    const { todo_list } = req.body;

    if (!todo_list || !Array.isArray(todo_list)) {
      return res.status(400).json({ message: "Invalid todo_list format" });
    }

    const userId = req.user.id;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // user.todos = user.todos ? [...user.todos, ...todo_list] : todo_list;
    user.todos = todo_list.length > 0 ? todo_list : user.todo;

    await user.save();

    return res.status(200).json({ message: "Successfully in saveTodo" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getAll = async (req, res) => {
  try {
    return res.status(200).json({ message: "Successfully getting All" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export { saveTodo, getAll };
