const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  category: String,
  description: String,
  date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    default: "pending"
  }
});

module.exports = mongoose.model("Expense", expenseSchema);