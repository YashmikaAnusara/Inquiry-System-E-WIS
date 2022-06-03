import React, { useState } from "react";
import "../css/MarketingNavBar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "react-router-dom";
import BranchReg from "./BranchRegForm";

function MarketingNavBar() {
  const [active, setActive] = useState(false);
  const addBranchHandler = () => {
    setActive(true);
  };
  return (
    <div>
      {active ? <BranchReg /> : ""}

      <div className="headerWraper"></div>

      <div className="navWraper">
        <div className="headerContentsectionWrapper">
          <p className="DashboardTopic">Dashboard</p>
          <Link to="/dashBoard">
            <div className="Dashboardcontent">
              <div className="Dashboardcontentext">
                <DashboardIcon />
                <p className="DashboardcontenWord"> Dashboard</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="headerContentsectionWrapper">
          <p className="DashboardTopic">Inquiries</p>
          <Link to="/InquiryForm">
            <div className="Dashboardcontent">
              <div className="Dashboardcontentext">
                <DashboardIcon />
                <p className="DashboardcontenWord"> Branch Inquiry</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="headerContentsectionWrapper">
          <p className="DashboardTopic">Configurations</p>
          <Link to="/addemployee">
            <div className="Dashboardcontent">
              <div className="Dashboardcontentext">
                <DashboardIcon />
                <p className="DashboardcontenWord">View Employee</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MarketingNavBar;
