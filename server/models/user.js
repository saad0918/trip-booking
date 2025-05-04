import mongoose from "mongoose";

// Define schema for User
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,  // Ensuring username is unique
  },
  email: {
    type: String,
    required: true,
    unique: true,  // Ensuring email is unique
    match: [/.+@.+\..+/, "Please enter a valid email"],  // Email validation regex
  },
  password: {
    type: String,
    required: true,
    minlength: 6,  // Ensure password is at least 6 characters
  },
});

const User = mongoose.model("User", userSchema);

export default User;
