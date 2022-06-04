import React from "react";
import "../css/Inquiriesdetail.css";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";

function BranchInquiriesDeatils(props) {
  return (
    <div className="inquirie-detail-main-wrapper">
      <div className="inquirie-detail-grp ">
        <div className="inquirie-detail-box">
          <div className="inquirie-detail-wrapper">
            <PersonIcon fontSize="small" />
            <p className="inquirie-details ">{props.firstName}</p>
          </div>
          <div className="inquirie-detail-wrapper">
            <PersonIcon fontSize="small" />
            <p className="inquirie-details ">{props.secondName}</p>
          </div>
          <div className="inquirie-detail-wrapper">
            <EmailIcon fontSize="small" />
            <p className="inquirie-details ">{props.email}</p>
          </div>
        </div>
        <div className="inquirie-detail-box">
          <div className="inquirie-detail-wrapper">
            <PhoneIcon fontSize="small" />
            <p className="inquirie-details ">{props.contact}</p>
          </div>
          <div className="inquirie-detail-wrapper">
            <MenuBookIcon fontSize="small" />
            <p className="inquirie-details ">{props.course}</p>
          </div>
          <div className="inquirie-detail-wrapper">
            <HomeIcon fontSize="small" />
            <p className="inquirie-details ">{props.branch}</p>
          </div>
        </div>
        <div className="inquirie-detail-box">
          <div className="inquirie-message-wrapper">
            <MessageIcon />
            <p className="inquirie-message ">{props.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BranchInquiriesDeatils;
