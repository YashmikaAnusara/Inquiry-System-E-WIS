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
  const month = req.body.frommonth;

  const addinquiry = new InquiryForm({
    firstname,
    secondname,
    email,
    mobilenumber,
    course,
    branch,
    message,
    month,
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

router.route("/get/details/:branch").get((req, res) => {
  const branch = req.params.branch;
  InquiryForm.find({ branch: { $eq: branch } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.route("/remove/:id").get((req, res) => {
  let id = req.params.id;
  InquiryForm.deleteOne({ _id: id })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);

      res.send(err);
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

// router.route("/inquiry/count").get((req, res) => {
//   InquiryForm.find()
//     .exec(function (err, details) {
//       var a = 0;
//       var jan = 0;
//       var feb = 0;
//       var march = 0;
//       var april = 0;
//       var may = 0;
//       var june = 0;
//       var july = 0;
//       var aug = 0;
//       var sep = 0;
//       var oct = 0;
//       var nov = 0;
//       var dec = 0;
//       var count = new Array();
//       if (err) {
//         res.json(err)
//       }
//       else {
//         while(a < details.length){
//             res.json(details[a].month)
          
//           a=a+1;
//         }
        
//       } 
//     })
// });



module.exports = router;
