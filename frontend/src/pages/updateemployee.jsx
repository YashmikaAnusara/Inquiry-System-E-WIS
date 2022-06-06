import React, { useState, useEffect } from "react";
import MarketingNavBar from "../components/MarketingNavBar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router";
import LoadingButton from "@mui/lab/LoadingButton";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";
import "../css/Updateemployee.css";

export default function Updateemployee() {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const { id } = useParams();
   
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [Name, setName] = useState("");
  const [NIC, setNIC] = useState("");
  const [Contact, setContact] = useState("");
  const [Email, setEmail] = useState("");
  const [Branch, setBranch] = useState("");

  useEffect(() => {
    console.log(id);
    axios
      .get(`http://localhost:8070/employee/update/detail/${id}`)
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

  const submithendle = (e) => {
    setLoading(true);
    const data = { Name, NIC, Contact, Email, Branch };
    setTimeout(() => {
      axios
        .put(`http://localhost:8070/employee/update/employee/${id}`, data)
        .then((res) => {
          console.log(data);
          setLoading(false);
          setOpen(true);
        })
        .catch((err) => {
          setLoading(false);
          setOpen2(true);
        });
    }, 3000);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen2(false);
    setOpen(false);
  };

  return(
    <div>
      <MarketingNavBar />
      <div className="employeecontentMainWrapper">
        <div className="from">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 2, width: "45ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <h2 className="heading">Update Employee</h2>
            <TextField
              id="outlined-basic"
              label="Employee's Name"
              variant="outlined"
              value={Name || ""}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Employee's NIC"
              variant="outlined"
              value={NIC || ""}
              onChange={(e) => {
                setNIC(e.target.value);
              }}
            />
            <TextField
              type="number"
              id="outlined-basic"
              label="Employee's Contact"
              variant="outlined"
              value={Contact || ""}
              onChange={(e) => {
                setContact(e.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Employee's Email"
              variant="outlined"
              value={Email || ""}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Employee's Branch"
              variant="outlined"
              value={Branch || ""}
              onChange={(e) => {
                setBranch(e.target.value);
              }}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
          <div className="updatefield">
            <LoadingButton
              className="updatebutton"
              size="small"
              onClick={submithendle}
              loading={loading}
              color="primary"
              variant="contained"
            >
              Update
            </LoadingButton>
          </div>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Employee Updated Successfully
        </Alert>
      </Snackbar>
      <Snackbar open={open2} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Database Error
        </Alert>
      </Snackbar>
    </div>
  );
}
