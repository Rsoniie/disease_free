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
  todo: [{ title: { type: String, required: true }, link: { type: String }, time: {type : Date} }],
});

const User = new mongoose.model("User", userSchema);

export default User;
