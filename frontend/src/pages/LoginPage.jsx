import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export default function LoginPage() {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": {
            m: 1,
            width: "38ch",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <br />
        <TextField
          type="password"
          id="outlined-basic"
          label="Password"
          variant="outlined"
        />
      </Box>
    </div>
  );
}
