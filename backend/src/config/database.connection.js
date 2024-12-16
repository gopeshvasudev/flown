import mongoose from "mongoose";

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.DATABASE_CONNECTION_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
  }
}

export default connectToDatabase;
