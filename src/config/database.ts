import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/challenge-global-db';

// Conect to db
const connectToDatabase = async () => {
  try {
    await mongoose.connect(dbUri);
    console.log('Succesfully connection to DB');
  } catch (error) {
    console.error('Failed connection to DB:', error);
    process.exit(1);
  }
};

export default connectToDatabase;