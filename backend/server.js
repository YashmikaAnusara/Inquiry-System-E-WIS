//Variable decleration
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();

//Assign into localhost ports
const PORT = process.env.PORT || 8070;

//Json Methods
app.use(cors());
app.use(bodyParser.json());

//Database Connection
const URL = process.env.MONGODB_URL;

//MongoDB configurations
mongoose.connect(URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

//Mongoose Connection
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Connection Successful!");
});

//Routers Connection
const Login = require("./routes/Login");
const Branch=require('./routes/BranchRegister')
const Employee=require("./routes/EmpRegister")
//Routers
app.use("/Login", Login);
app.use("/employee", Employee);
app.use("/branch", Branch);
 
const InquiryForm = require("./routes/InquiryForm");

//Routers
app.use("/Login", Login);
app.use("/InquiryForm", InquiryForm);
 

//Run on port
app.listen(PORT, () => {
  console.log(`Server is up and running on port number : ${PORT}`);
});
