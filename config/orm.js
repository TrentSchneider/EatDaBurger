const connection = require("../config/connection");

const orm = {
  // displays all burgers
  all: function (cb) {
    let queryString = "SELECT * FROM burger";
    connection.query(queryString, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
  // adds new burgers
  create: function (vals, cb) {
    let queryString = "INSERT INTO burger (name) VALUES (?)";
    connection.query(queryString, vals, function (err, res) {
      if (err) throw err;
      cb(res);
    });
  },
  // updates devoured from 0 to 1 for a burger
  update: function (vals, cb) {
    let queryString = "UPDATE burger SET devoured=1 WHERE id=?";
    connection.query(queryString, vals, function (err, res) {
      if (err) throw err;
      cb(res);
    });
  },
  // deletes all burgers from the database and resets the id increment
  delete: function (cb) {
    connection.query("DELETE FROM burger", function (err, res) {
      if (err) throw err;
      connection.query("TRUNCATE TABLE burger", function (err, res) {
        if (err) throw err;
        cb(res);
      });
    });
  },
};

module.exports = orm;
