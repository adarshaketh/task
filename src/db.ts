import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

async function connectDatabase (){
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
      throw new Error('MongoDB URI is not defined in ENV');
    }
  
    try {
      await mongoose.connect(mongoUri);
      console.log('MongoDB connected successfully');
    } catch (error) {
      console.error('MongoDB connection error:', error);
      process.exit(1);
    }
}

export {connectDatabase,mongoose};