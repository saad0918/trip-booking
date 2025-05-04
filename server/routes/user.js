import express from "express";
import User from "../models/User.js"; // Assuming you have a User model

const router = express.Router();

// POST route to create a new user
router.post("/create", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validate input (You can add more validation here)
    if (!username || !email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required!" });
    }

    // Create new user
    const newUser = new User({
      username,
      email,
      password,  // Password should be hashed before saving (using bcrypt or other hashing library)
    });

    await newUser.save();

    return res.status(201).json({ success: true, message: "User created successfully!" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Failed to create user" });
  }
});

// GET route to fetch user details (example)
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    return res.status(200).json({ success: true, user });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Failed to get user" });
  }
});

// PUT route to update user details
router.put("/update/:id", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validate input
    if (!username || !email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required!" });
    }

    // Find and update the user
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { username, email, password }, // In practice, password should be hashed
      { new: true }  // Return the updated user
    );

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    return res.status(200).json({ success: true, message: "User updated successfully", user: updatedUser });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Failed to update user" });
  }
});

// DELETE route to delete a user
router.delete("/delete/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    return res.status(200).json({ success: true, message: "User deleted successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Failed to delete user" });
  }
});

export default router;
