import React, { useState } from "react";
import Box from "@mui/material/Box";
import "../css/InquiryForm.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function InquiryForm() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  const [Branch, setBranch] = useState("");

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3);

      if (active) {
        //Enter the Fetch Data URL
        fetch("")
          .then((response) => response.json())
          .then((data) => {
            setOptions(data);
          });
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);
  return (
    <div className="InquiryBody">
      <div className="InquiryCon">
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
          <h1 className="InquiryTitle">Quick Inquiry</h1>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Second Name"
            variant="outlined"
          />
          <TextField
            type="email"
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
          />
          <TextField
            type="number"
            id="outlined-basic"
            label="Mobile Number"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            className="InquiryTextboxSize"
            select
            label="Course"
            variant="outlined"
            SelectProps={{ native: true }}
          >
            <option value=""></option>
            <option value="IT">IT </option>
            <option value="SE">SE</option>
            <option value="CN">CN</option>
            <option value="IM">IM</option>
            <option value="DS">DS</option>
          </TextField>
          <Autocomplete
            id="Brand"
            className="InquiryFeild"
            open={open}
            onOpen={() => {
              setOpen(true);
            }}
            onClose={() => {
              setOpen(false);
            }}
            getOptionLabel={(option) => option.branch}
            onChange={(e, value) => {
              setBranch(value.branch);
            }}
            options={options}
            loading={loading}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Branch"
                value={Branch}
                variant="outlined"
                name="Branch"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {loading ? (
                        <CircularProgress color="inherit" size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                }}
              />
            )}
          />
        </Box>
        <TextField
          id="outlined-basic"
          label="Enter the Message"
          variant="outlined"
          multiline
          rows={2}
          fullWidth
          margin="normal"
          className="InquiryMessage"
        />
        <div>
          <Button className="InquiryButton" variant="contained">
            Submit
          </Button>
          <p className="InquiryPar">© 2022 Inquiry Message, Inc.</p>
        </div>
      </div>
    </div>
  );
}
