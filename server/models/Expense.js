const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  amount: Number,
  category: String,
  description: String,
  date: Date,
  currency: String,
  status: {
    type: String,
    default: "Pending"
  },
  user_id: Number
});

module.exports = mongoose.model("Expense", expenseSchema);