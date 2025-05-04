import express from "express";
import Page from "../models/Page.js";

const router = express.Router();

// POST route to save HTML content to MongoDB
router.post("/save", async (req, res) => {
  try {
    const { htmlContent } = req.body;  // Assuming HTML content will come from request body
    const newPage = new Page({ htmlContent });
    await newPage.save();
    return res.status(201).json({ success: true, message: "HTML content saved!" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Failed to save content!" });
  }
});

export default router;
