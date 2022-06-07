import React, { useState, useEffect } from "react";
import "../css/MarketingHome.css";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import HouseIcon from "@mui/icons-material/House";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ManagerNavBar from "../components/ManagerNavBar";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import axios from "axios";

export default function ManagerHome() {
  const [Inquiry, setInquiry] = useState([]);
  const [Inquirybranch, setInquirybranch] = useState();
  const [Inquirybranch2, setInquirybranch2] = useState();
  const [Inquirybranch3, setInquirybranch3] = useState();
  const [branch, setbranch] = useState();
  const [branch2, setbranch2] = useState();
  const [branch3, setbranch3] = useState();
  const [dispalybranch, setdispalybranch] = useState("Borella");
  const [AllInquiry, setAllInquiry] = useState();
  const [BranchInquiry, setBranchInquiry] = useState();
  const [BranchInquiry2, setBranchInquiry2] = useState();
  const [BranchInquiry3, setBranchInquiry3] = useState();
  const [year, setyear] = useState();

  const ManagerEmail = sessionStorage.getItem("ManagerEmail");

  const branchanger = (name) => {
    if (name === branch) {
      setdispalybranch(branch);
    } else if (name === branch2) {
      setdispalybranch(branch2);
    } else if (name === branch3) {
      setdispalybranch(branch3);
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8070/InquiryForm/inquiry/${dispalybranch}`)
      .then((res) => {
        // console.log(res.data);
        setInquiry(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispalybranch]);

  useEffect(() => {
    axios
      .get(`http://localhost:8070/employee/employee/${ManagerEmail}`)
      .then((res) => {
        setbranch(res.data.Branch);
        setbranch2(res.data.Branch_Two);
        setbranch3(res.data.Branch_Three);

        setInquirybranch(res.data.Branch);
        setInquirybranch2(res.data.Branch_Two);
        setInquirybranch3(res.data.Branch_Three);
      })
      .catch((e) => {
        alert(e);
      });
  }, [dispalybranch, ManagerEmail]);

  useEffect(() => {
    if (Inquirybranch === "") {
      axios
        .get(
          `http://localhost:8070/InquiryForm/count/null/${Inquirybranch2}/${Inquirybranch3}`
        )
        .then((res) => {
          setAllInquiry(res.data);
        })
        .catch((e) => {
          alert(e);
        });
    } else if (Inquirybranch2 === "") {
      axios
        .get(
          `http://localhost:8070/InquiryForm/count/${Inquirybranch}/null/${Inquirybranch3}`
        )
        .then((res) => {
          setAllInquiry(res.data);
        })
        .catch((e) => {
          alert(e);
        });
    } else if (Inquirybranch3 === "") {
      axios
        .get(
          `http://localhost:8070/InquiryForm/count/${Inquirybranch}/${Inquirybranch2}/null`
        )
        .then((res) => {
          setAllInquiry(res.data);
        })
        .catch((e) => {
          alert(e);
        });
    }
    axios
      .get(
        `http://localhost:8070/InquiryForm/count/${Inquirybranch}/${Inquirybranch2}/${Inquirybranch3}`
      )
      .then((res) => {
        setAllInquiry(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [Inquirybranch, Inquirybranch2, Inquirybranch3]);

  const view = (e) => {
    axios
      .get(`http://localhost:8070/InquiryForm/inquiry/${dispalybranch}/${year}`)
      .then((res) => {
        console.log(res.data);
        console.log(year);
        setInquiry(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (Inquirybranch !== "") {
      axios
        .get(
          `http://localhost:8070/InquiryForm/countbranch/${Inquirybranch}/null/null`
        )
        .then((res) => {
          setBranchInquiry(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
      if (Inquirybranch2 !== "") {
        axios
          .get(
            `http://localhost:8070/InquiryForm/countbranch/null/${Inquirybranch2}/null`
          )
          .then((res) => {
            setBranchInquiry2(res.data);
          })
          .catch((e) => {
            console.log(e);
          });
        if (Inquirybranch3 !== "") {
          axios
            .get(
              `http://localhost:8070/InquiryForm/countbranch/null/null/${Inquirybranch3}`
            )
            .then((res) => {
              setBranchInquiry3(res.data);
            })
            .catch((e) => {
              console.log(e);
            });
        }
      } else if (Inquirybranch3 !== "") {
        axios
          .get(
            `http://localhost:8070/InquiryForm/countbranch/null/null/${Inquirybranch3}`
          )
          .then((res) => {
            setBranchInquiry3(res.data);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    } else if (Inquirybranch2 !== "") {
      axios
        .get(
          `http://localhost:8070/InquiryForm/countbranch/null/${Inquirybranch2}/null`
        )
        .then((res) => {
          setBranchInquiry2(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
      if (Inquirybranch3 !== "") {
        axios
          .get(
            `http://localhost:8070/InquiryForm/countbranch/null/null/${Inquirybranch3}`
          )
          .then((res) => {
            setBranchInquiry3(res.data);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    } else if (Inquirybranch3 !== "") {
      axios
        .get(
          `http://localhost:8070/InquiryForm/countbranch/null/null/${Inquirybranch3}`
        )
        .then((res) => {
          setBranchInquiry3(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [Inquirybranch, Inquirybranch2, Inquirybranch3]);

  return (
    ManagerEmail && (
      <div>
        <div>
          <ManagerNavBar />
        </div>
        <div className="contentMainWrapper123">
          <div className="contentbodywrapper">
            <div className="cardMainWrapper">
              <div className="cardwrapper123 card1">
                <div className="cardall">
                  <div className="cardaling">
                    <AllInboxIcon sx={{ fontSize: 90 }} />
                  </div>
                  <div className="cardtext">
                    <div className="cardallfont"> All Inquiries</div>
                    <div className="count">{AllInquiry}</div>
                  </div>
                </div>
              </div>
              {Inquirybranch ? (
                <div className="cardwrapper123 card2">
                  <div className="cardall">
                    <div className="cardaling">
                      <HouseIcon sx={{ fontSize: 90 }} />
                    </div>
                    <div className="cardtext">
                      <div className="cardfront">{Inquirybranch}</div>
                      <div className="count">{BranchInquiry}</div>
                    </div>
                  </div>
                </div>
              ) : null}

              {Inquirybranch2 ? (
                <div className="cardwrapper123 card3">
                  <div className="cardall">
                    <div className="cardaling">
                      <HouseIcon sx={{ fontSize: 90 }} />
                    </div>
                    <div className="cardtext">
                      <div className="cardfront">{Inquirybranch2}</div>
                      <div className="count">{BranchInquiry2}</div>
                    </div>
                  </div>
                </div>
              ) : null}

              {Inquirybranch3 ? (
                <div className="cardwrapper123 card3">
                  <div className="cardall">
                    <div className="cardaling">
                      <HouseIcon sx={{ fontSize: 90 }} />
                    </div>
                    <div className="cardtext">
                      <div className="cardfront">{Inquirybranch3}</div>
                      <div className="count">{BranchInquiry3}</div>
                    </div>
                  </div>
                </div>
              ) : null}
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
                  <TextField
                    type="number"
                    id="outlined-basic"
                    label="Enter the Year"
                    variant="outlined"
                    value={year}
                    onChange={(e) => {
                      setyear(e.target.value);
                    }}
                  />
                  <div className="view">
                    <Button variant="text" onClick={view}>
                      View
                    </Button>
                  </div>
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
    )
  );
}
