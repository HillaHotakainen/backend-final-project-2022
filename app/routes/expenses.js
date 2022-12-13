const express = require("express");
const {
  getExpenses,
  getExpensesByMonth,
  getExpensesByDate,
  createExpense,
  deleteExpense,
  updateExpense,
} = require("../controllers/expenses");

const router = express.Router();

router.get("/", getExpenses);
router.get("/:month", getExpensesByMonth);
router.get("/date/:date", getExpensesByDate);
router.post("/", createExpense);
router.delete("/:id", deleteExpense);
router.put("/", updateExpense);

module.exports = router;
