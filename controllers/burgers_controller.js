var express = require("express");

var router = express.Router();

var cat = require("../models/burger");

router.get("/", function (req, res) {
  connection.query("SELECT * FROM burger", function (err, data) {
    if (err) {
      return res.status(500).end();
    }
    console.log(data);
    res.render("index", { burger: data });
  });
});

module.exports = router;
