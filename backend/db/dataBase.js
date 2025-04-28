const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected successfully.");
  } catch (err) {
    console.error("Database connection failed:", err.message);
  }
};

module.exports = connectDb;