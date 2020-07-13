const express = require("express");
const router = express.Router();
const models = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  models.Register.findOne({
    where: {
      email: email,
    },
  }).then((register) => {
    if (register == null) {
      res.send({ message: "not registered" });
    } else {
      if (bcrypt.compareSync(password, register.password)) {
        const token = jwt.sign({ userId: register.id }, "secretkey");
        res.send({ token: token });
      } else {
        res.send({ message: "Password is incorrect" });
      }
    }
  });
});

module.exports = router;
