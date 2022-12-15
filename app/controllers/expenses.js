const expenses = require("../models/expenses");

const getExpenses = async (req, res) => {
  try {
    const response = await expenses.getAll();
    if (response) {
      res.send(response);
    }
  } catch (e) {
    res.status(500).send("Database error");
  }
};

const getExpensesByMonth = async (req, res) => {
  const month = req.params.month;
  try {
    const response = await expenses.getByMonth(month);
    if (month <= 12 && response.length >= 1) {
      res.send(response);
      console.log(response.length);
    } else if (month > 12) {
      res.status(400).send("Invalid input");
    } else {
      res.status(404).send("Not Found");
    }
  } catch (e) {
    res.status(500).send("Database error");
  }
};

const getExpensesByDate = async (req, res) => {
  const date = req.params.date;
  try {
    const response = await expenses.getByDate(date);
    if (response.length >= 1) {
      res.send(response);
    } else {
      res.status(404).send("Not Found");
    }
  } catch (e) {
    res.status(500).send("Database error");
  }
};

const getExpensesByShop = async (req, res) => {
  const shop = req.params.shop;
  try {
    const response = await expenses.getByShop(shop);
    if (response.length >= 1) {
      res.send(response);
    } else {
      res.status(404).send("Not Found");
    }
  } catch (e) {
    res.status(500).send("Database error");
  }
};

const getExpensesByCategory = async (req, res) => {
  const category = req.params.category;
  try {
    const response = await expenses.getByCategory(category);
    if (response.length >= 1) {
      res.send(response);
    } else {
      res.status(404).send("Not Found");
    }
  } catch (e) {
    res.status(500).send("Database error");
  }
};

const createExpense = async (req, res) => {
  const expense = {
    date: req.body.date,
    amount: req.body.amount,
    shop: req.body.shop,
    category: req.body.category,
  };
  try {
    const response = await expenses.save(expense);
    if (response) {
      expenses.id = response.insertId;
      res.send(expense);
    }
  } catch (e) {
    res.status(500).send("Database error");
  }
};

const deleteExpense = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  try {
    const response = await expenses.deleteById(id);
    if (response) {
      res.send("invoice deleted");
    }
  } catch (e) {
    res.status(500).send("Database error");
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
  try {
    const response = await expenses.updateById(expense);
    if (response) {
      res.send(expense);
    }
  } catch (e) {
    res.status(500).send("Database error");
  }
};

module.exports = {
  getExpenses,
  getExpensesByMonth,
  getExpensesByDate,
  getExpensesByShop,
  getExpensesByCategory,
  createExpense,
  deleteExpense,
  updateExpense,
};
