const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RegSchema = new Schema({
  Name: {
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

});

const data = mongoose.model("Branch_Reg", RegSchema);
module.exports = data;
