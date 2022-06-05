const router = require("express").Router();
let EmployeeRegister = require("../models/EmpReg");
let Login = require("../models/LoginDetails");

router.route("/register").post((req, res) => {
  const {
    Name,
    NIC,
    Contact,
    Email,
    Branch,
    Branch_Two,
    Branch_Three,
    Position,
    Password,
  } = req.body;
  const details = new EmployeeRegister({
    Name: Name,
    NIC: NIC,
    Contact: Contact,
    Email: Email,
    Branch: Branch,
    Branch_Two: Branch_Two,
    Branch_Three: Branch_Three,
    Position: Position,
    Password: Password,
  });
  details
    .save()
    .then((data) => {
      res.send(data);
      const logindetail = new Login({
        Email: Email,
        Position: Position,
        Password: Password,
      });
      logindetail.save();
    })
    .catch((err) => {
      res.status(err);
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

  EmployeeRegister.find({
    $or: [
      { Branch: { $eq: branch } },
      { Branch_Two: { $eq: branch } },
      { Branch_Three: { $eq: branch } },
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.route("/employee/:email").get((req, res) => {
  let email = req.params.email;

  EmployeeRegister.findOne({ Email: email })
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

router.route("/update/:id").put((req, res) => {
  let id = req.params.id;
  const {
    Name,
    NIC,
    Contact,
    Email,
    Branch,
    BranchTwo,
    BranchThree,
    Position,
    Password,
  } = req.body;
  EmployeeRegister.findOneAndUpdate(
    { _id: id },
    {
      Name: Name,
      NIC: NIC,
      Contact: Contact,
      Email: Email,
      Branch: Branch,
      Branch_Two: BranchTwo,
      Branch_Three: BranchThree,
      Position: Position,
      Password: Password,
    }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send("err");
    });
});

router.route("/update/login/:email").put((req, res) => {
  let email = req.params.email;
  const {
    Name,
    NIC,
    Contact,
    Email,
    Branch,
    BranchTwo,
    BranchThree,
    Position,
    Password,
  } = req.body;
  Login.findOneAndUpdate(
    { Email: email },
    { Email: Email, Position: Position, Password: Password }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.route("/count").get((req, res) => {
  EmployeeRegister.find()
    .then((data) => {
      res.json(data.length);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.route("/remove/employee/:email").delete((req, res) => {
  let email=req.params.email
  EmployeeRegister.deleteOne({Email:{$eq:email}})
    .then((data) => {
      res.json(data);
      Login.deleteOne({Email:{$eq:email}})
    })
    .catch((err) => {
      res.json(err);
    });
});
router.route("/remove/login/:email").delete((req, res) => {
  let email=req.params.email
  Login.deleteOne({Email:{$eq:email}})
    .then((data) => {
      res.json(data);
       
    })
    .catch((err) => {
      res.json(err);
    });
});


module.exports = router;
