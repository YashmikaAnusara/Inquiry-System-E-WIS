import React, { useState } from "react";
import Box from "@mui/material/Box";
import "../css/InquiryForm.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function InquiryForm() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  const [wFirstName, setwFirstName] = React.useState(false);
  const [wSecondName, setwSecondName] = React.useState(false);
  const [wEmail, setwEmail] = React.useState(false);
  const [wMobileNumber, setwMobileNumber] = React.useState(false);
  const [wCourse, setwCourse] = React.useState(false);
  const [wBranch, setwBranch] = React.useState(false);
  const [wMessage, setwMessage] = React.useState(false);

  const [success, setsuccess] = React.useState(false);

  const [FirstName, setFirstName] = useState("");
  const [SecondName, setSecondName] = useState("");
  const [Email, setEmail] = useState("");
  const [MobileNumber, setMobileNumber] = useState("");
  const [Course, setCourse] = useState("");
  const [Branch, setBranch] = useState("");
  const [Message, setMessage] = useState("");

  const inquirymonth = new Date();

  let year = inquirymonth.getFullYear();

  const month = inquirymonth.getMonth();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3);

      if (active) {
        //Enter the Fetch Data URL
        fetch("http://localhost:8070/branch/get/details")
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

  const submithandler = (e) => {
    const frommonth = months[month];
    const data = {
      FirstName,
      SecondName,
      Email,
      MobileNumber,
      Course,
      Branch,
      Message,
      frommonth,
      year,
    };
    if (FirstName === "") {
      setwFirstName(true);
    } else if (SecondName === "") {
      setwSecondName(true);
    } else if (Email === "") {
      setwEmail(true);
    } else if (MobileNumber === "") {
      setwMobileNumber(true);
    } else if (Course === "") {
      setwCourse(true);
    } else if (Branch === "") {
      setwBranch(true);
    } else if (Message === "") {
      setwMessage(true);
    } else {
      axios
        .post(`http://localhost:8070/InquiryForm/AddInquiry`, data)
        .then((res) => {
          setsuccess(true);
        });
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setwFirstName(false);
    setwSecondName(false);
    setwEmail(false);
    setwMobileNumber(false);
    setwCourse(false);
    setwBranch(false);
    setwMessage(false);
    setsuccess(false);
  };
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
            value={FirstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            required
          />
          <TextField
            id="outlined-basic"
            label="Second Name"
            variant="outlined"
            value={SecondName}
            onChange={(e) => {
              setSecondName(e.target.value);
            }}
            required
          />
          <TextField
            type="email"
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <TextField
            type="number"
            id="outlined-basic"
            label="Mobile Number"
            variant="outlined"
            value={MobileNumber}
            onChange={(e) => {
              setMobileNumber(e.target.value);
            }}
            required
          />
          <TextField
            id="outlined-basic"
            className="InquiryTextboxSize"
            select
            label="Course"
            variant="outlined"
            SelectProps={{ native: true }}
            value={Course}
            onChange={(e) => {
              setCourse(e.target.value);
            }}
            required
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
            getOptionLabel={(option) => option.Name}
            onChange={(e, value) => {
              setBranch(value.Name);
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
          value={Message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          required
        />
        <div>
          <Button
            type="submit"
            className="InquiryButton"
            variant="contained"
            onClick={submithandler}
          >
            Submit
          </Button>
          <p className="InquiryPar">© 2022 Inquiry Message, Inc.</p>
        </div>
      </div>

      <Snackbar open={wFirstName} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Enter your Frist Name
        </Alert>
      </Snackbar>
      <Snackbar
        open={wSecondName}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Enter your Second Name
        </Alert>
      </Snackbar>
      <Snackbar open={wEmail} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Enter your Email
        </Alert>
      </Snackbar>
      <Snackbar
        open={wMobileNumber}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Enter your Mobile Number
        </Alert>
      </Snackbar>
      <Snackbar open={wCourse} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Select your Course
        </Alert>
      </Snackbar>
      <Snackbar open={wBranch} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Select your Branch
        </Alert>
      </Snackbar>
      <Snackbar open={wMessage} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Enter your Message
        </Alert>
      </Snackbar>
      <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Inquiry Send Successfully
        </Alert>
      </Snackbar>
    </div>
  );
}
