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

router.route("/Log/:username/:password").get((req, res) => {
  let username = req.params.username;
  let password = req.params.password;

  Login.findOne({
    $and: [{ username: { $eq: username } }, { password: { $eq: password } }],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
