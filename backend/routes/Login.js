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

  Login.findOne({
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

router.route("/email/update/:id/:email").put((req, res) => {
  const id = req.params.id;
  const email = req.params.email;
  Login.findOneAndUpdate({_id:id},{Email:email})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/password/update/:id/:password").put((req, res) => {
  const id = req.params.id;
  const password = req.params.password;
  Login.findOneAndUpdate({_id:id},{Password:password})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});


module.exports = router;
