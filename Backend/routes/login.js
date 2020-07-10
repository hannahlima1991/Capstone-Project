const express = require("express");
const router = express.Router();
const models = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  console.log(req.body);
  models.Register.findOne({
    where: {
      email: email,
    },
  }).then((register) => {
    console.log(register);
    if (register == null) {
      res.send({ message: "not registered", status: false });
    } else {
      if (bcrypt.compareSync(password, register.password)) {
        const token = jwt.sign({ userId: register.id }, "secretkey");
        console.log(register);
        res.send({ token: token, user: register, status: true });
      } else {
        res.send({ message: "Password is incorrect", status: false });
      }
    }
  });
});

module.exports = router;
