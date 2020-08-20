const connection = require("../config/connection");

const orm = {
  all: function (tableInput, cb) {
    let queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, results) {
      if (err) {
        throw err;
      }
      cb(results);
    });
  },
};

module.exports = orm;
