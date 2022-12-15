const { request } = require("express");
const express = require("express");
const cors = require("cors");

const expensesRouter = require("./routes/expenses");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/expenses", expensesRouter);

module.exports = app;
