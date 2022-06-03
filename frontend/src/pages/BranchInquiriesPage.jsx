import React, { useState, useEffect } from "react";
import MarketingNavBar from "../components/MarketingNavBar";
import "../css/InquiriesPage.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import BranchInquiriesDeatils from "../components/BranchInquiriesDeatils";

function BranchInquiriesPage() {
  const params = useParams();
  const [details, setDetails] = useState([]);
  const email = params.email;

  useEffect(() => {
    const branch = sessionStorage.getItem("marketingbranch");
    const branch2 = sessionStorage.getItem("marketingbranch2");
    const branch3 = sessionStorage.getItem("marketingbranch3");
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
        <MarketingNavBar />
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
          </div>
          <div className="inquiry-body-wrapper clearfix">
            <div className="inquiry-details">
              {details.map((detail) => (
                <div>
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
