import React, { useState } from "react";
import "../css/MarketingNavBar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import PeopleIcon from "@mui/icons-material/People";
import { Link } from "react-router-dom";
import BranchReg from "./BranchRegForm";
import BranchMenu from "./BranchMenu";


function ManagerNavBar() {
  const [active, setActive] = useState(false);
  const addBranchHandler = () => {
    setActive(true);
  };
  return (
    <div>
      {active ? <BranchReg /> : ""}

      <div className="headerWraper">
        <div className="logo-wrapper"></div>
        <div className="menu-wrapper">
          <div className="menu-icon">
            <BranchMenu />
          </div>
        </div>
      </div>

      <div className="navWraper">
        <div className="headerContentsectionWrapper">
          <p className="DashboardTopic">Dashboard</p>
          <Link to="/managerdashBoard">
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
          <Link to="/Branchinquiry">
            <div className="Dashboardcontent">
              <div className="Dashboardcontentext">
                <HomeWorkIcon />
                <p className="DashboardcontenWord"> Branch Inquiry</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="headerContentsectionWrapper">
          <p className="DashboardTopic">Configurations</p>
          <Link to="/viewemployee">
            <div className="Dashboardcontent">
              <div className="Dashboardcontentext">
                <PeopleIcon />
                <p className="DashboardcontenWord">View Employee</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ManagerNavBar;
