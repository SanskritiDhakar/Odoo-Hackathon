const Expense = require("../models/Expense");

// CREATE
exports.createExpense = async (req, res) => {
  try {
    console.log("BODY:", req.body); // 🔥 debug

    const expense = new Expense({
      title: req.body.title,
      amount: req.body.amount,
      category: req.body.category,
      description: req.body.description
    });

    const savedExpense = await expense.save();

    console.log("SAVED:", savedExpense); // 🔥 debug

    res.status(201).json(savedExpense);
  } catch (error) {
    console.error("ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

// GET
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
exports.updateStatus = async (req, res) => {
  try {
    const expense = await Expense.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    res.json(expense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};