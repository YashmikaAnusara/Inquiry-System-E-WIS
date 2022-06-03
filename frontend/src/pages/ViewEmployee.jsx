import React, { useState, useEffect } from "react";
import axios from "axios";
import MarketingNavBar from "../components/MarketingNavBar";
import "../css/ViewEmployee.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function ViewEmployee() {
  const [employee, setemployee] = useState([]);

  // const deleteemployee = (id) => {
  //   console.log(id);
  //   axios
  //     .delete(`http://localhost:8070/employee/delete/employee/${id}`)
  //     .then((res) => {
  //       alert("delete");
  //     });
  // };
  useEffect(() => {
    const branch = sessionStorage.getItem("marketingbranch");
    axios
      .get(`http://localhost:8070/employee/get/detail/${branch}`)
      .then((res) => {
        setemployee(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <MarketingNavBar />
      <div className="viewemployeeback">
        <div className="container">
          {employee.map((data, index) => (
            <div key={index}>
              <div className="card">
                <h2 className="icon">{data.Name}</h2>
                <div className="content">
                  <h3>NIC : {data.NIC}</h3>
                  <h3>Contact : {data.Contact}</h3>
                  <h3>Email : {data.Email}</h3>
                  <Box sx={{ "& button": { m: 1 } }}>
                    <div className="button">
                      <Link to={`/updateemployee/${data._id}`}>
                        <Button size="medium">Update</Button>
                      </Link>
                      <Button size="medium">Delete</Button>
                    </div>
                  </Box>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
