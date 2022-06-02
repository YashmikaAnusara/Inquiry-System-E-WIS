const router = require("express").Router();
let InquiryForm = require("../models/InquiryForm");

router.route("/AddInquiry").post((req, res) => {
  const firstname = req.body.FirstName;
  const secondname = req.body.SecondName;
  const email = req.body.Email;
  const mobilenumber = Number(req.body.MobileNumber);
  const course = req.body.Course;
  const branch = req.body.Branch;
  const message = req.body.Message;

  const addinquiry = new InquiryForm({
    firstname,
    secondname,
    email,
    mobilenumber,
    course,
    branch,
    message,
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

module.exports = router;
