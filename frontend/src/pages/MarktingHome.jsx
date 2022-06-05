import React, { useState, useEffect } from "react";
import "../css/MarketingHome.css";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import MarketingNavBar from "../components/MarketingNavBar";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

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


export default function MarktingHome() {
  const [Inquiry, setInquiry] = useState([]);
  const [branch, setbranch] = useState("");
  const [branch2, setbranch2] = useState("");
  const [branch3, setbranch3] = useState("");
  const [dispalybranch, setdispalybranch] = useState("Borella");
  const [value, setValue] = React.useState(new Date());

  const ManagerEmail = sessionStorage.getItem("ManagerEmail");

  const branchanger = (name) => {
    if (name === branch) {
      setdispalybranch(branch);
      console.log(name);
    } else if (name === branch2) {
      setdispalybranch(branch2);
    } else if (name === branch3) {
      setdispalybranch(branch3);
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8070/employee/employee/${ManagerEmail}`)
      .then((res) => {
        setbranch(res.data.Branch);
        setbranch2(res.data.Branch_Two);
        setbranch3(res.data.Branch_Three);
      })
      .catch((e) => {
        alert(e);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8070/InquiryForm/inquiry/${dispalybranch}`)
      .then((res) => {
        console.log(res.data);
        setInquiry(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispalybranch]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `http://localhost:8070/InquiryForm/inquiry/${dispalybranch}/${value}`
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //       setInquiry(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [dispalybranch]);

  return (
    <div>
      <div>
        <MarketingNavBar />
      </div>
      <div className="contentMainWrapper123">
        <div className="contentbodywrapper">
          <div className="cardMainWrapper">
            <div className="cardwrapper card1">
              <div className="cardall">
                <div className="cardaling">
                  <AllInboxIcon sx={{ fontSize: 90 }} />
                </div>
                <div className="cardtext">All Inquiries</div>
              </div>
            </div>
            <div className="cardwrapper card2"></div>
            <div className="cardwrapper card3"></div>
          </div>

          <div className="chart">
            <Stack spacing={2} direction="row">
              {branch ? (
                <Button variant="text" onClick={() => branchanger(branch)}>
                  {branch}
                </Button>
              ) : null}
              {branch2 ? (
                <Button variant="text" onClick={() => branchanger(branch2)}>
                  {branch2}
                </Button>
              ) : null}
              {branch3 ? (
                <Button variant="text" onClick={() => branchanger(branch3)}>
                  {branch3}
                </Button>
              ) : null}
              <div className="date">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  views={["year"]}
                  label="Select Year...."
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField {...params} helperText={null} />
                  )}
                />
                </LocalizationProvider>
                </div>
            </Stack>

            <AreaChart
              width={1150}
              height={400}
              data={Inquiry}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="Inquiry"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </div>
        </div>
      </div>
    </div>
  );
}
