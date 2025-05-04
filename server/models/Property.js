import mongoose from "mongoose";

// Define schema for Property
const propertySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
});

const Property = mongoose.model("Property", propertySchema);

export default Property;
