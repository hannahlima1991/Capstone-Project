const express = require("express");
const router = express.Router();
const models = require("../models");

router.post("/", (req, res) => {
  res.send({ message: "works" });
});

module.exports = router;
