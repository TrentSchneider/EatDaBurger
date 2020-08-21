const express = require("express");

const router = express.Router();

const burger = require("../models/burger");
const { json } = require("express");

router.get("/", function (req, res) {
  burger.all(function (data) {
    let hbsObject = {
      burger: data,
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", function (req, res) {
  burger.create(req.body.name, function (result) {
    res.json({ burger: result.newBurg });
  });
});

module.exports = router;
