const express = require("express");

const router = express.Router();

const burger = require("../models/burger");

router.get("/", function (req, res) {
  burger.all(function (data) {
    let hbsObject = {
      burger: data,
    };
    res.render("index", hbsObject);
  });
});

module.exports = router;
