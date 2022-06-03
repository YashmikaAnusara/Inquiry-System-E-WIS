import React, { useState, useEffect } from "react";
import "../css/MarketingHome.css";
import MarketingNavBar from "../components/MarketingNavBar";
import { AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";
import axios from "axios";

const data = [
  {
    name: "Page A",
    uv: 1000,
  },
  {
    name: "Page B",
    uv: 100,
  },
];

export default function MarktingHome() {
  const [employee, setemployee] = useState([]);

  useEffect(() => {
    const branch = sessionStorage.getItem("marketingbranch");
    axios
      .get(`http://localhost:8070/InquiryForm/Get/${branch}`)
      .then((res) => {
        setemployee(res.data);
        console.log(res.data.email);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div>
        <MarketingNavBar />
      </div>
      <div className="contentMainWrapper">
        <div className="contentbodywrapper">
          <div className="cardMainWrapper">
            <div className="cardwrapper card1"></div>
            <div className="cardwrapper card2"></div>
            <div className="cardwrapper card3"></div>
          </div>
          <div className="chart">
            <AreaChart
              width={900}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </div>
        </div>
      </div>
    </div>
  );
}
