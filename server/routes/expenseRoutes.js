const express = require("express");
const router = express.Router();

const {
  createExpense,
  getExpenses,
  updateStatus
} = require("../controllers/expenseController");

// Create expense
router.post("/", createExpense);

// Get all expenses
router.get("/", getExpenses);

// Update status (approve/reject)
router.put("/:id", updateStatus);

module.exports = router;