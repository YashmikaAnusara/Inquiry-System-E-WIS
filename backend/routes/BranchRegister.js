const router = require("express").Router();
const BranchRegister = require("../models/BranchReg");

router.route("/register").post((req, res) => {
    const { Name, Contact, Email} = req.body
    const details = new BranchRegister({ Name: Name,Contact: Contact, Email: Email});
    details.save()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status();
        });
});

router.route("/get/details").get((req, res) => {
    BranchRegister.find()
    .then(data=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send(err)
    })
})

module.exports = router;