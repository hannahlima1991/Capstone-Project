const express = require("express");
const app = express();
const models = require("./models");
const cors = require("cors");
const session = require("express-session");
const loginRoute = require("./routes/login");
const bcrypt = require("bcryptjs");

app.use(cors());
app.use(express.json());

//Route for login
app.use("/login", loginRoute);

//getting the registrations
app.get("/registers", (req, res) => {
  models.Register.findAll().then((registers) => res.json(registers));
});

app.post("/registers", async (req, res) => {
  let name = req.body.name;
  let lastName = req.body.lastName;
  let email = req.body.email;
  let password = await bcrypt.hash(req.body.password, 10);

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
