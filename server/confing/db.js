const mongoose = require("mongoose");
const MONGODB_URI = "mongodb://localhost:27017/book-review";
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
