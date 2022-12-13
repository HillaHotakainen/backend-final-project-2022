const { request } = require("express");
const express = require("express");

const expensesRouter = require("./routes/expenses");

const app = express();

app.use(express.json());
app.use("/api/expenses", expensesRouter);

module.exports = app;
