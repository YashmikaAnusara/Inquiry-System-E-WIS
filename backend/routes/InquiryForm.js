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
  const year = req.body.year;

  const addinquiry = new InquiryForm({
    firstname,
    secondname,
    email,
    mobilenumber,
    course,
    branch,
    message,
    month,
    year,
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

router.route("/inquiry/:branch").get((req, res) => {
  let branch = req.params.branch;

  InquiryForm.find({ branch: branch }).exec(function (err, details) {
    var a = 0;
    var jan = 0;
    var feb = 0;
    var march = 0;
    var april = 0;
    var may = 0;
    var june = 0;
    var july = 0;
    var aug = 0;
    var sep = 0;
    var oct = 0;
    var nov = 0;
    var dec = 0;

    if (err) {
      res.json(err);
    } else {
      while (a < details.length) {
        if (details[a].month == "January") {
          jan++;
        } else if (details[a].month == "February") {
          feb++;
        } else if (details[a].month == "March") {
          march++;
        } else if (details[a].month == "April") {
          april++;
        } else if (details[a].month == "May") {
          may++;
        } else if (details[a].month == "June") {
          june++;
        } else if (details[a].month == "July") {
          july++;
        } else if (details[a].month == "August") {
          aug++;
        } else if (details[a].month == "September") {
          sep++;
        } else if (details[a].month == "October") {
          oct++;
        } else if (details[a].month == "November") {
          nov++;
        } else {
          dec++;
        }
        a = a + 1;
      }
      const MonthArray = [
        { name: "Jan", Inquiry: jan },
        { name: "Feb", Inquiry: feb },
        { name: "March", Inquiry: march },
        { name: "April", Inquiry: april },
        { name: "May", Inquiry: may },
        { name: "June", Inquiry: june },
        { name: "July", Inquiry: july },
        { name: "Aug", Inquiry: aug },
        { name: "Sep", Inquiry: sep },
        { name: "Oct", Inquiry: oct },
        { name: "Nov", Inquiry: nov },
        { name: "Dec", Inquiry: dec },
      ];
      res.json(MonthArray);
    }
  });
});

router.route("/inquiry/count/:year").get((req, res) => {
  let year = req.params.year;
  InquiryForm.find({ year: { $eq: year } }).exec(function (err, details) {
    var a = 0;
    var jan = 0;
    var feb = 0;
    var march = 0;
    var april = 0;
    var may = 0;
    var june = 0;
    var july = 0;
    var aug = 0;
    var sep = 0;
    var oct = 0;
    var nov = 0;
    var dec = 0;

    if (err) {
      res.json(err);
    } else {
      while (a < details.length) {
        if (details[a].month == "January") {
          jan++;
        } else if (details[a].month == "February") {
          feb++;
        } else if (details[a].month == "March") {
          march++;
        } else if (details[a].month == "April") {
          april++;
        } else if (details[a].month == "May") {
          may++;
        } else if (details[a].month == "June") {
          june++;
        } else if (details[a].month == "July") {
          july++;
        } else if (details[a].month == "August") {
          aug++;
        } else if (details[a].month == "September") {
          sep++;
        } else if (details[a].month == "October") {
          oct++;
        } else if (details[a].month == "November") {
          nov++;
        } else {
          dec++;
        }
        a = a + 1;
      }
      const MonthArray = [
        jan,
        feb,
        march,
        april,
        may,
        june,
        july,
        aug,
        sep,
        oct,
        nov,
        dec,
      ];
      res.json(MonthArray);
    }
  });
});

router.route("/inquiry/:branch/:year").get((req, res) => {
  let branch = req.params.branch;
  let year = req.params.year;
  InquiryForm.find({ year: { $eq: year }, branch: { $eq: branch } }).exec(
    function (err, details) {
      var a = 0;
      var jan = 0;
      var feb = 0;
      var march = 0;
      var april = 0;
      var may = 0;
      var june = 0;
      var july = 0;
      var aug = 0;
      var sep = 0;
      var oct = 0;
      var nov = 0;
      var dec = 0;

      if (err) {
        res.json(err);
      } else {
        while (a < details.length) {
          if (details[a].month == "January") {
            jan++;
          } else if (details[a].month == "February") {
            feb++;
          } else if (details[a].month == "March") {
            march++;
          } else if (details[a].month == "April") {
            april++;
          } else if (details[a].month == "May") {
            may++;
          } else if (details[a].month == "June") {
            june++;
          } else if (details[a].month == "July") {
            july++;
          } else if (details[a].month == "August") {
            aug++;
          } else if (details[a].month == "September") {
            sep++;
          } else if (details[a].month == "October") {
            oct++;
          } else if (details[a].month == "November") {
            nov++;
          } else {
            dec++;
          }
          a = a + 1;
        }
        const MonthArray = [
          { name: "Jan", Inquiry: jan },
          { name: "Feb", Inquiry: feb },
          { name: "March", Inquiry: march },
          { name: "April", Inquiry: april },
          { name: "May", Inquiry: may },
          { name: "June", Inquiry: june },
          { name: "July", Inquiry: july },
          { name: "Aug", Inquiry: aug },
          { name: "Sep", Inquiry: sep },
          { name: "Oct", Inquiry: oct },
          { name: "Nov", Inquiry: nov },
          { name: "Dec", Inquiry: dec },
        ];
        res.json(MonthArray);
      }
    }
  );
});
module.exports = router;
