import React, { useState, useEffect } from "react";
import axios from "axios";
import MarketingNavBar from "../components/MarketingNavBar";
import EmployeeView from "../components/EmployeeView";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "../css/ViewEmployee.css";

export default function ViewEmployee() {
  const [employee, setemployee] = useState([]);
  const [dispalybranch, setdispalybranch] = useState([]);
  const [found, setfound] = useState("");
  const [branch, setbranch] = useState("");
  const [branch2, setbranch2] = useState("");
  const [branch3, setbranch3] = useState("");

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
        console.log(res.data.Branch_Three);
      })
      .catch((e) => {
        alert(e);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8070/employee/get/detail/${dispalybranch}`)
      .then((res) => {
        setemployee(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispalybranch]);

  const inquiries = employee.filter((data) => {
    return data.Name.toLowerCase().includes(found.toLowerCase());
  });

  return (
    <div>
      <MarketingNavBar />
      <div className="viewemployeeback">
        <div className="container">
          <div className="inquiry-search-wrapper123">
            <input
              type="search"
              className="inquiry-search"
              placeholder="Search Employees..."
              onChange={(event) => {
                setfound(event.target.value);
              }}
            />
            <div className="viewbuttons">
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
          </div>
          {inquiries.map((data, index) => (
            <div key={index}>
              <EmployeeView
                Name={data.Name}
                NIC={data.NIC}
                Contact={data.Contact}
                Email={data.Email}
                id={data._id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
