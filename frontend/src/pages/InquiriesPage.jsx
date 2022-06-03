import React, { useState, useEffect } from "react";
import AdminNavbar from "../components/AdminNavbar";
import "../css/InquiriesPage.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";

function InquiriesPage() {
  const params = useParams();
  const [details, setDetails] = useState([]);
  const branch = params.branch;
  const email = params.email;

  useEffect(() => {
    axios
      .get(`http://localhost:8070/InquiryForm/get/details/${branch}`)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <div>
      <div>
        <AdminNavbar />
      </div>
      <div className="inquiry-content-Wrapper">
        <div className="inquiry-content-wrapper">
          <div className="inquiry-header">
            <div className="inquiry-search-wrapper">
              <input
                type="search"
                className="inquiry-search"
                placeholder="Search Branch..."
              />
            </div>
            <div className="inquiry-branch-wrapper">
              <div className="icon-wrapper">
                {" "}
                <HomeIcon fontSize="small" className="inquiry-icon" />{" "}
                <p className="inquiry-branch">{branch}</p>
              </div>
              <div className="icon-wrapper">
                <EmailIcon fontSize="small" className="inquiry-icon" />{" "}
                <p className="inquiry-branch">{email}</p>{" "}
              </div>
            </div>
          </div>
          <div className="inquiry-body-wrapper clearfix">
            <div className="inquiry-details">
              {details.map((detail) => (
                <div>{detail.firstname}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InquiriesPage;
