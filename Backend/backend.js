const express = require("express");
const app = express();
const models = require("./models");

app.use(express.json());

app.post("/registers", (req, res) => {
  let name = req.body.name;
  let lastName = req.body.lastName;
  let email = req.body.email;
  let password = req.body.password;
  console.log("name.lastName.email.password");
  console.log(req.body);

  let register = models.Register.build({
    name: name,
    last_name: lastName,
    email: email,
    password: password,
  });

  register.save().then((savedRegister) => {
    res.json({ success: true });
  });
});

//create registration model with the name, lastName, email, password

app.listen(8000, () => {
  console.log("Server running strong");
});
