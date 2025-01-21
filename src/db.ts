import mongoose from "mongoose";
import { getMongoURI } from "./helpers/env";

async function connectDatabase (){
    const mongoUri = getMongoURI()
  
    try {
      await mongoose.connect(mongoUri);
      console.log('MongoDB connected successfully');
    } catch (error) {
      console.error('MongoDB connection error:', error);
      process.exit(1);
    }
}

export {connectDatabase,mongoose};