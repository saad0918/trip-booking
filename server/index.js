import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config(); // Load environment variables from the .env file

const connectDB = () => {
  mongoose.set('strictQuery', true);
  mongoose
    .connect(process.env.MONGODB_URI)  // Make sure to use MONGODB_URI from .env file
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => {
      console.error('Failed to connect to MongoDB:', err);
    });
};

const startServer = async () => {
  try {
    connectDB();
    app.listen(8080, () => console.log('Server started at 8080'));
  } catch (error) {
    console.log(error);
  }
};

startServer();
