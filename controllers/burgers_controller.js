var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

router.get("/", function (req, res) {
  burger.all(function (data) {
    let hbsObject = {
      burger: data,
    };
    res.render("index", hbsObject);
  });
});

module.exports = router;
