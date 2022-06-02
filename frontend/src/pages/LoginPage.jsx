import React, { useState } from "react";
import "../css/LoginPage.css";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import axios from "axios";

export default function LoginPage() {
  const [loading, setLoading] = React.useState(false);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const nav = useNavigate();

  const handleClick = () => {
    axios
      .get(`http://localhost:8070/Login/Log/${username}/${password}`)
      .then((res) => {
        if (res.data.positions === "Admin") {
          setLoading(true);
          setTimeout(() => {
            nav("/dashBoard");
          }, 3000);
        } else if (res.data.positions === "Manger") {
          setLoading(true);
          setTimeout(() => {
            nav("/InquiryForm");
          }, 3000);
        }
      })
      .catch((err) => {
        alert("It's it not ok");
      });
  };

  return (
    <div className="LoginBody">
      <div className="LoginCon">
        <div className="LoginText">
          <h1>Hi, Wellcome</h1>
        </div>
        <div className="LoginText">
          <h1>CADD Center</h1>
        </div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              // m: 1,
              width: "38ch",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="LoginFrom">
            <h3 className="LoginSubText">Sign in with Email Address</h3>
            <TextField
              value={username}
              label="Username"
              fullWidth
              margin="normal"
              onChange={(e) => {
                setusername(e.target.value);
              }}
              variant="outlined"
            />
            <TextField
              type="password"
              value={password}
              label="Password"
              fullWidth
              margin="normal"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              variant="outlined"
            />
            <div className="LoginButton">
              <LoadingButton
                size="small"
                onClick={handleClick}
                loading={loading}
                color="secondary"
                variant="contained"
              >
                Sign in
              </LoadingButton>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
}
