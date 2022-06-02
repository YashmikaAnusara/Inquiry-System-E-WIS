import React, { useState, useEffect } from "react";
import MarketingNavBar from "../components/MarketingNavBar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import { useParams } from "react-router";
import axios from "axios";
// import Button from "@mui/material/Button";

export default function Updateemployee() {
  //   const { id } = useParams();

  const [Name, setName] = useState("");
  const [NIC, setNIC] = useState("");
  const [Contact, setContact] = useState("");
  const [Email, setEmail] = useState("");
  const [Branch, setBranch] = useState("");

  useEffect(() => {
    axios
      .get(
        `http://localhost:8070/employee/update/detail/6298a15c0ba7fc272ccddd34`
      )
      .then((res) => {
        setName(res.data.Name);
        setNIC(res.data.NIC);
        setContact(res.data.Contact);
        setEmail(res.data.Email);
        setBranch(res.data.Branch);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <MarketingNavBar />
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 2, width: "45ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <h2>Update Employee</h2>
        <TextField
          id="outlined-basic"
          label="Employee's Name"
          variant="outlined"
          value={Name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Employee's NIC"
          variant="outlined"
          value={NIC}
          onChange={(e) => {
            setNIC(e.target.value);
          }}
        />
        <TextField
          type="number"
          id="outlined-basic"
          label="Employee's Contact"
          variant="outlined"
          value={Contact}
          onChange={(e) => {
            setContact(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Employee's Email"
          variant="outlined"
          value={Email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Employee's Branch"
          variant="outlined"
          value={Branch}
          onChange={(e) => {
            setBranch(e.target.value);
          }}
          InputProps={{
            readOnly: true,
          }}
        />
      </Box>
    </div>
  );
}
