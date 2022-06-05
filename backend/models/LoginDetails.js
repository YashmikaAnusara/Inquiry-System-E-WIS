const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Login_modles = new Schema({
  Email: {
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

const data = mongoose.model("Login", Login_modles);
module.exports = data;
