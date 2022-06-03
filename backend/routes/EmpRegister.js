const router = require("express").Router();
let EmployeeRegister = require("../models/EmpReg");

router.route("/register").post((req, res) => {
    const { Name, NIC, Contact, Email, Branch,Branch_Two,Branch_Three,Position,Password } = req.body
    const details = new EmployeeRegister({ Name: Name, NIC: NIC, Contact: Contact, Email: Email, Branch: Branch,Branch_Two:Branch_Two,Branch_Three:Branch_Three,Position:Position,Password:Password });
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

router.route("/update/detail/:id").get((req, res) => {
  let id = req.params.id;

  EmployeeRegister.findById(id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.route("/update/employee/:id").put((req, res) => {
  let id = req.params.id;

  const Name = req.body.Name;
  const NIC = req.body.NIC;
  const Contact = req.body.Contact;
  const Email = req.body.Email;
  const Branch = req.body.Branch;
  const Position = req.body.Position;

  const details = {
    Name,
    NIC,
    Contact,
    Email,
    Branch,
    Position,
  };

  EmployeeRegister.findByIdAndUpdate(id, details)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send("err");
    });
});

router.route("/delete/detail/:id").delete((req, res) => {
  let id = req.params.id;

  EmployeeRegister.findByIdAndDelete(id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
