import React, { useState } from 'react';
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [popupVisible, setPopupVisible] = useState(false);

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission (page reload)

    console.log('Submitted data:', formData); // Log the form data

    try {
      const response = await fetch('http://localhost:8080/api/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send form data as JSON
      });

      const result = await response.json(); // Parse the response as JSON

      if (response.ok) {
        console.log('Success:', result.message); // Log success message
        setPopupVisible(true); // Show success popup
      } else {
        console.error('Error:', result.error); // Log the error from the backend
      }
    } catch (error) {
      console.error('Error:', error); // Catch and log any network or other errors
    }
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Your Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      {popupVisible && (
        <div>
          <p>Thank you for reaching out!</p>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
