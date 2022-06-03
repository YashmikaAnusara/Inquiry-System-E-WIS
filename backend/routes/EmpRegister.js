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
    .then(data=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send(err)
    })
})

module.exports = router;