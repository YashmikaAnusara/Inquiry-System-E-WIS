const router = require("express").Router();
let InquiryForm = require("../models/InquiryForm");

router.route("/AddInquiry").post((req, res) => {
  const firstname = req.body.username;
  const secondname = req.body.password;
  const mobilenumber = Number(req.body.password);
  const course = req.body.password;
  const branch = req.body.password;
  const Message = req.body.password;

  const addinquiry = new InquiryForm({
    firstname,
    secondname,
    mobilenumber,
    course,
    branch,
    Message,
  });
  addinquiry
    .save()
    .then(() => {
      res.json("Inquiry Details Added!!");
    })
    .catch((err) => {
      console.log(err);
    });
});
