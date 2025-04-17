import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  todo: [{ text: { type: String, required: true }, category: {type: String}, link: { type: String }, time: {type : Date}, icon :{type: String} }],
});

const User = new mongoose.model("User", userSchema);

export default User;
