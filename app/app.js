const { request } = require("express");
const express = require("express");
const cors = require("cors");

const expensesRouter = require("./routes/expenses");

const app = express();

app.use(express.json());
app.use("/api/expenses", expensesRouter);
app.use(
  cors({
    origin: ["http://localhost:5000", "https://project-igip.onrender.com/"],
  })
);

module.exports = app;
