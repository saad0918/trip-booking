import express from "express";
import Property from "../models/Property.js"; // Assuming you have a Property model

const router = express.Router();

// POST route to add a new property
router.post("/add", async (req, res) => {
  try {
    const { name, description, price, location, owner } = req.body;

    // Validate input
    if (!name || !description || !price || !location || !owner) {
      return res.status(400).json({ success: false, message: "All fields are required!" });
    }

    // Create new property
    const newProperty = new Property({
      name,
      description,
      price,
      location,
      owner,
    });

    await newProperty.save();

    return res.status(201).json({ success: true, message: "Property added successfully!" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Failed to add property" });
  }
});

// GET route to fetch all properties
router.get("/", async (req, res) => {
  try {
    const properties = await Property.find();  // You can also add query filters if needed

    return res.status(200).json({ success: true, properties });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Failed to get properties" });
  }
});

// GET route to fetch a specific property by ID
router.get("/:id", async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({ success: false, message: "Property not found" });
    }

    return res.status(200).json({ success: true, property });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Failed to get property" });
  }
});

// PUT route to update a property
router.put("/update/:id", async (req, res) => {
  try {
    const { name, description, price, location, owner } = req.body;

    // Validate input
    if (!name || !description || !price || !location || !owner) {
      return res.status(400).json({ success: false, message: "All fields are required!" });
    }

    // Find and update the property
    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id,
      { name, description, price, location, owner },
      { new: true }  // Return the updated property
    );

    if (!updatedProperty) {
      return res.status(404).json({ success: false, message: "Property not found" });
    }

    return res.status(200).json({ success: true, message: "Property updated successfully", property: updatedProperty });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Failed to update property" });
  }
});

// DELETE route to delete a property
router.delete("/delete/:id", async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);

    if (!property) {
      return res.status(404).json({ success: false, message: "Property not found" });
    }

    return res.status(200).json({ success: true, message: "Property deleted successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Failed to delete property" });
  }
});

export default router;
