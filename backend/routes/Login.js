const router = require("express").Router();
let Login = require("../models/LoginDetails");

router.route("/LoginDetails").post((req, res) => {
  const username = req.body.username;
    const password = req.body.password;

  const newlogdetails = new Login({
    username,
    password,
  });
  newlogdetails
    .save()
    .then(() => {
      res.json("Login Details Added!!");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
