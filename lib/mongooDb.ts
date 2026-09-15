// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI!;

// if (!MONGODB_URI) {
//   throw new Error('Please define MONGODB_URI in .env.local');
// }

// export async function connectDB() {
//   await mongoose.connect(MONGODB_URI);
// }


// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
  //   throw new Error("Please define MONGODB_URI in .env.local");
  // }
  
  // export async function connectDB() {
    //   try {
      //     await mongoose.connect(MONGODB_URI);
      //     console.log("MongoDB connected");
      //   } catch (error) {
        //     console.error("MongoDB connection failed:", error);
        //     throw error;
        //   }
        // }
        
// import mongoose from "mongoose";
// const MONGODB_URI = process.env.MONGODB_URI;

// export async function connectDB() {
//   if (!MONGODB_URI) {
//     throw new Error("Please define the MONGODB_URI environment variable");
//   }

//   try {
//     await mongoose.connect(MONGODB_URI); 
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.error("MongoDB connection failed:", error);
//     throw error;
//   }
// }

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in .env");
}

export async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URI);

    console.log("MongoDB connected");
    console.log("Database name:", mongoose.connection.name);
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw error;
  }
}