const router = require("express").Router();
let EmployeeRegister = require("../models/EmpReg");

router.route("/register").post((req, res) => {

  const { Name, NIC, Contact, Email, Branch, Position } = req.body;
  const details = new EmployeeRegister({
    Name: Name,
    NIC: NIC,
    Contact: Contact,
    Email: Email,
    Branch: Branch,
    Position: Position,
  });
  details
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status();
    });

    const { Name, NIC, Contact, Email, Branch,Position,Password } = req.body
    const details = new EmployeeRegister({ Name: Name, NIC: NIC, Contact: Contact, Email: Email, Branch: Branch,Position:Position,Password:Password });
    details.save()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status();
        });

});

router.route("/get/details").get((req, res) => {
  EmployeeRegister.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.route("/get/detail/:branch").get((req, res) => {
  let branch = req.params.branch;

  EmployeeRegister.find({ Branch: branch })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.route("/delete/employee/:id").get((req, res) => {
  let id = req.params.id;

  EmployeeRegister.findByIdAndDelete({ _id: id })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
