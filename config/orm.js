const connection = require("../config/connection");

const orm = {
  all: function (cb) {
    let queryString = "SELECT * FROM burger";
    connection.query(queryString, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
  create: function (vals, cb) {
    let queryString = "INSERT INTO burger (name) VALUES (?)";
    connection.query(queryString, vals, function (err, res) {
      if (err) throw err;
      cb(res);
    });
  },
};

module.exports = orm;
