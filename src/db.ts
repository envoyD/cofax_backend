import mongoose, { Connection } from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config(); 

const {
    MONGO_HOST,
    MONGO_PORT,
    MONGO_DB_NAME
} = process.env

// Define the connection URL to your MongoDB server
const mongoURI = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB_NAME}`;

// Create an interface to represent the Mongoose connection
interface IMongoDB {
  connection: Connection | null;
}

const db: IMongoDB = {
  connection: null,
};

export const connectDB = async () => {
  try {
    // Connect to the MongoDB database
    const connection = await mongoose.connect(mongoURI);
  
      // Store the connection in the db object
      db.connection = connection.connection;
  

    console.log('MongoDB connected');
  } catch (err) {
    console.error(`Error connecting to MongoDB: ${err}`);
    process.exit(1); // Exit the application if the connection fails
  }
};

export default db;