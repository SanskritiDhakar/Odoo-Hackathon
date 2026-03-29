require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// 🔗 Connect Database
connectDB();

// 🔧 Middleware
app.use(cors());
app.use(express.json());

// 📦 Routes
const expenseRoutes = require("./routes/expenseRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/api/expenses", expenseRoutes);
app.use("/api/users", userRoutes);

// 🧪 Test Route
app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

// 🚀 Start Server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});