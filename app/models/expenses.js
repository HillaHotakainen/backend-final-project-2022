const connect = require("../db/connection");

const allExpenses = {
  getAll: () =>
    new Promise((resolve, reject) => {
      connect.query("SELECT * FROM expenses;", (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    }),
  getByMonth: (month) =>
    new Promise((resolve, reject) => {
      const selectQuery = "SELECT * FROM expenses WHERE MONTH(date) = ?;";
      connect.query(selectQuery, month, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    }),
  getByDate: (date) =>
    new Promise((resolve, reject) => {
      const selectQuery = "SELECT * FROM expenses WHERE date = date(?);";
      connect.query(selectQuery, date, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    }),
  save: (expense) =>
    new Promise((resolve, reject) => {
      connect.query("INSERT INTO expenses SET ?", expense, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    }),
  deleteById: (id) =>
    new Promise((resolve, reject) => {
      const deleteQuery = "DELETE FROM expenses WHERE id=?;";
      connect.query(deleteQuery, id, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    }),
  updateById: (expenses) =>
    new Promise((resolve, reject) => {
      const updateQuery =
        "UPDATE expenses SET date = ?, amount = ?, shop = ?, category = ? WHERE id = ?;";
      connect.query(
        updateQuery,
        [
          expenses.date,
          expenses.amount,
          expenses.shop,
          expenses.category,
          expenses.id,
        ],
        (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    }),
};

module.exports = allExpenses;
