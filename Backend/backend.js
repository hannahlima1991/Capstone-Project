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
  console.log(req.body);
  let name = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;
  let password = await bcrypt.hash(req.body.password, 10);

  //not sure placed here.//NotSure
  models.Register.findOne({
    where: {
      email: email,
    },
  }).then((register) => {
    if (register == null) {
      let register = models.Register.build({
        name: name,
        last_name: lastName,
        email: email,
        password: password,
      });
      register.save().then((savedRegister) => {
        res.json({ success: true });
      });
    } else {
      res.send("Email is currently used");
    }
  });
});

///NNOT Sure ^///

//   let register = models.Register.build({
//     name: name,
//     last_name: lastName,
//     email: email,
//     password: password,
//   });

//   register.save().then((savedRegister) => {
//     res.json({ success: true });
//   });

app.listen(8000, () => {
  console.log("Server running strong");
});
