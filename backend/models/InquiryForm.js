const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InquiryForm = new Schema({
  firstname: {
    type: String,
    required: true,
  },

  secondname: {
    type: String,
    required: true,
  },

  mobilenumber: {
    type: Number,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  course: {
    type: String,
    required: true,
  },

  branch: {
    type: String,
    required: true,
  },

  message: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
});

const data = mongoose.model("Inquiry_Form", InquiryForm);
module.exports = data;
