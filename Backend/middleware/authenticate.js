const jwt = require("jsonwebtoken");

let authenticate = (req, res, next) => {
  const headers = req.headers["authentication"];
  const token = headers.split(" ")[1];
  if (token != "null") {
    jwt.verify(token, "secretkey", (error, decoded) => {
      if (decoded) {
        next();
      } else if (error) {
        res.json({ message: "error" });
      } else {
        res.json({ message: "error" });
      }
    });
  } else {
    res.json({ message: "no token" });
  }
};

module.exports = authenticate;
