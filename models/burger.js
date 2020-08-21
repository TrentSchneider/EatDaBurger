const orm = require("../config/orm");

const burger = {
  all: function (cb) {
    orm.all(function (res) {
      cb(res);
    });
  },
  create: function (vals, cb) {
    orm.create(vals, function (res) {
      cb(res);
    });
  },
};

module.exports = burger;
