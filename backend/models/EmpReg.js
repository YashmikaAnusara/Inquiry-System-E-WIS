const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RegSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },

  NIC: {
    type: String,
    required: true,
  },
  Contact: {
    type: String,
    required: true,
  },

  Email: {
    type: String,
    required: true,
  },
  Branch: {
    type: String,
    required: true,
  },
  Position: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    // required: true,
  },

});

const data = mongoose.model("Employee_Reg", RegSchema);
module.exports = data;
