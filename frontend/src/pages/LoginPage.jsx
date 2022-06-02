import React from "react";
import "../css/LoginPage.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";

export default function LoginPage() {
  const [loading, setLoading] = React.useState(false);

  function handleClick() {
    setLoading(true);
  }

  return (
    <div className="LoginBody">
      <div className="LoginCon">
        <div className="LoginText">
          <h1>Hi, Wellcome</h1>
        </div>
        <div className="LoginText">
          <h1>CADDY Center</h1>
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
              id="outlined-basic"
              label="Username"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              type="password"
              id="outlined-basic"
              label="Password"
              fullWidth
              margin="normal"
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
