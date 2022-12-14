const express = require("express");
const {
  getExpenses,
  getExpensesByMonth,
  getExpensesByDate,
  getExpensesByShop,
  getExpensesByCategory,
  createExpense,
  deleteExpense,
  updateExpense,
} = require("../controllers/expenses");

const router = express.Router();

router.get("/", getExpenses);
router.get("/:month", getExpensesByMonth);
router.get("/date/:date", getExpensesByDate);
router.get("/shop/:shop", getExpensesByShop);
router.get("/category/:category", getExpensesByCategory);
router.post("/", createExpense);
router.delete("/:id", deleteExpense);
router.put("/", updateExpense);

module.exports = router;
