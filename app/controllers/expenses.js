const expenses = require("../models/expenses");

const getExpenses = async (req, res) => {
  const response = await expenses.getAll();
  if (response) {
    res.send(response);
  }
};

const getExpensesByMonth = async (req, res) => {
  const month = req.params.month;
  const response = await expenses.getByMonth(month);
  if (response) {
    res.send(response);
  }
};

const getExpensesByDate = async (req, res) => {
  const date = req.params.date;
  console.log(date);
  const response = await expenses.getByDate(date);
  if (response) {
    res.send(response);
  }
};

const createExpense = async (req, res) => {
  const expense = {
    date: req.body.date,
    amount: req.body.amount,
    shop: req.body.shop,
    category: req.body.category,
  };
  const response = await expenses.save(expense);
  if (response) {
    expenses.id = response.insertId;
    res.send(expense);
  }
};

const deleteExpense = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const response = await expenses.deleteById(id);
  if (response) {
    res.send("invoice deleted");
  }
};

const updateExpense = async (req, res) => {
  const expense = {
    id: req.body.id,
    date: req.body.date,
    amount: req.body.amount,
    shop: req.body.shop,
    category: req.body.category,
  };
  const response = await expenses.updateById(expense);
  if (response) {
    res.send(expense);
  }
};

module.exports = {
  getExpenses,
  getExpensesByMonth,
  getExpensesByDate,
  createExpense,
  deleteExpense,
  updateExpense,
};
