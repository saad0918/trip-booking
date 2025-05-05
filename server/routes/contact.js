// routes/contact.js
import express from 'express';
import Contact from '../models/Contact.js'; // Import the model
const router = express.Router();

// Route to handle form submission
router.post('/submit', async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save(); // Save data to MongoDB
    res.status(201).json({ message: 'Contact form submitted successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error submitting contact form' });
  }
});

export default router;