const express = require("express");
const router = express.Router();
const models = require("../models");
const bcrypt = require("bcryptjs");

router.post("/", (req, res) => {
  let name = req.body.name;
  let password = req.body.password;

  models.Register.findOne({
    where: {
      name: name,
    },
  }).then((register) => {
    if (register == null) {
      res.send("not registered");
    } else {
      if (bcrypt.compareSync(password, register.password)) {
        res.send("status authenticated");
      } else {
        res.send("Password is incorrect");
      }
    }
  });
});

module.exports = router;
