const router = require("express").Router();
let Login = require("../models/LoginDetails");
let EmployeeRegister = require("../models/EmpReg");

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

  EmployeeRegister.findOne({
    $and: [{ Email: { $eq: username } }, { Password: { $eq: password } }],
  })
    .then((data) => {
      // if (data === null) {
      //   res.send(null);
      // } else {
      //   res.send(data);
      // }
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
