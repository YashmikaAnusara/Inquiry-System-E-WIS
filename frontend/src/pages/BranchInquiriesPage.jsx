import React, { useState, useEffect } from "react";
import MarketingNavBar from "../components/MarketingNavBar";
import "../css/BranchInquiriesPage.css";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import BranchInquiriesDeatils from "../components/BranchInquiriesDeatils";

function BranchInquiriesPage() {
  const [details, setDetails] = useState([]);
  const ManagerEmail = sessionStorage.getItem("ManagerEmail");
  const [branch, setbranch] = useState("");
  const [branch2, setbranch2] = useState("");
  const [branch3, setbranch3] = useState("");

  const [found, setfound] = useState("");

  const [dispalybranch, setdispalybranch] = useState([]);

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

  const inquiries = details.filter((data) => {
    return (
      data.email.toLowerCase().includes(found.toLowerCase()) ||
      data.course.toLowerCase().includes(found.toLowerCase())
    );
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8070/employee/employee/${ManagerEmail}`)
      .then((res) => {
        setbranch(res.data.Branch);
        setbranch2(res.data.Branch_Two);
        setbranch3(res.data.Branch_Three);
        console.log(res.data.Branch_Three);
      })
      .catch((e) => {
        alert(e);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8070/InquiryForm/get/details/${dispalybranch}`)
      .then((res) => {
        setDetails(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, [dispalybranch]);

  return (
    <div>
      <div>
        <MarketingNavBar />
      </div>
      <div className="inquiry-content-Wrapper">
        <div className="inquiry-content-wrapper">
          <div className="inquiry-header">
            <div className="inquiry-search-wrapper">
              <input
                type="search"
                className="inquiry-search"
                placeholder="Search Branch Inquiries..."
                onChange={(event) => {
                  setfound(event.target.value);
                }}
              />
            </div>
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
            </Stack>
          </div>
          <div className="buttonbranch"></div>
          <div className="inquiry-body-wrapper clearfix">
            <div className="inquiry-details">
              {inquiries.map((detail, index) => (
                <div key={index}>
                  <BranchInquiriesDeatils
                    firstName={detail.firstname}
                    secondName={detail.secondname}
                    email={detail.email}
                    contact={detail.mobilenumber}
                    course={detail.course}
                    branch={detail.branch}
                    message={detail.message}
                    id={detail._id}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BranchInquiriesPage;
