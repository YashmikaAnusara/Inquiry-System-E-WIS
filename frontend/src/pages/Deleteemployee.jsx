import React, { useState, useEffect } from "react";
import MarketingNavBar from "../components/ManagerNavBar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import "../css/Updateemployee.css";

export default function Deleteemployee() {
  const { id } = useParams();
  const nav = useNavigate();
  

  const [open, setOpen] = React.useState(false);
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
  }, [id]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submithendle = (e) => {
    setLoading(true);
    setOpen(false);
    setTimeout(() => {
      axios
        .delete(`http://localhost:8070/employee/delete/detail/${id}`)
        .then((res) => {
          setLoading(false);
          setOpen(false);
          nav("/viewemployee");
        })
        .catch((err) => {
          setLoading(false);
        });
    }, 3000);
  };

  return (
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
            <h2 className="heading">Delete Employee</h2>
            <TextField
              id="outlined-basic"
              label="Employee's Name"
              variant="outlined"
              value={Name || ""}
              onChange={(e) => {
                setName(e.target.value);
              }}
              InputProps={{
                readOnly: true,
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
              InputProps={{
                readOnly: true,
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
              InputProps={{
                readOnly: true,
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
              InputProps={{
                readOnly: true,
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
              onClick={handleClickOpen}
              loading={loading}
              color="primary"
              variant="contained"
            >
              Delete
            </LoadingButton>
          </div>
        </div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Are you sure the delete this employee?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Please the click the command to do this employee {Name}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>No</Button>
            <Button onClick={submithendle} autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
