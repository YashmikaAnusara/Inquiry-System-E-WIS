const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Login_modles = new Schema({
  username: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

const data = mongoose.model("Login", Login_modles);
module.exports = data;
