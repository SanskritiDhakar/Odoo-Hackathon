const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // ✅ Sirf URI print karega (debug ke liye)
    console.log("Mongo URI:", process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.error("MongoDB Error ❌:", error.message);
    process.exit(1); // optional but good practice
  }
};

module.exports = connectDB;