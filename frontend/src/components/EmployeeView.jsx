import React from "react";
import "../css/Inquiriesdetail.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "../css/ViewEmployee.css";

function EmployeeView(props) {
  return (
    <div>
      <div className="card">
        <h2 className="icon">{props.Name}</h2>
        <div className="content">
          <h3>NIC : {props.NIC}</h3>
          <h3>Contact : {props.Contact}</h3>
          <h3>Email : {props.Email}</h3>
          {/* <Box sx={{ "& button": { m: 1 } }}>
            <div className="button">
              <Link to={`/updateemployee/${props._id}`}>
                <Button size="medium" variant="contained">
                  Update
                </Button>
              </Link>
              <Link to={`/deleteemployee/${props._id}`}>
                <Button size="medium" variant="contained">
                  Delete
                </Button>
              </Link>
            </div>
          </Box> */}
        </div>
      </div>
    </div>
  );
}

export default EmployeeView;
