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



router.route('/get/details/:branch').get((req, res)=>{
  const branch=req.params.branch
  InquiryForm.find({branch:{$eq:branch}})
    .then(data=>{
        res.send(data) 
    })
    .catch((err)=>{
        res.send(err)
    })
})

router.route('/remove/:id').get((req, res)=>{
  let id=req.params.id
  InquiryForm.deleteOne({_id:id})
    .then(data=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send(err)
    });
  });

router.route("/Get/:branch").get((req, res) => {
  const branch = req.params.branch;
  InquiryForm.find({ branch: { $eq: branch } })
    .then((data) => {
      res.json(data);

    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
