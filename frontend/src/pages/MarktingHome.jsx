import React, { useState, useEffect } from "react";
import "../css/MarketingHome.css";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import MarketingNavBar from "../components/MarketingNavBar";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
  },
];

export default function MarktingHome() {
  const [Inquiry, setInquiry] = useState([]);

  useEffect(() => {
    const branch = sessionStorage.getItem("Managerbranch");
    axios
      .get(`http://localhost:8070/InquiryForm/Get/${branch}`)
      .then((res) => {
        console.log(res);
        setInquiry(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const data = (name) => {
  //   return 5;
  // };
  return (
    <div>
      <div>
        <MarketingNavBar />
      </div>
      <div className="contentMainWrapper">
        <div className="contentbodywrapper">
          <div className="cardMainWrapper">
            <div className="cardwrapper card1">
              <div className="cardall">
                <div className="cardaling">
                  <AllInboxIcon sx={{ fontSize: 90 }} />
                </div>
                <div className="cardtext">All Inquiries</div>
              </div>
            </div>
            <div className="cardwrapper card2"></div>
            <div className="cardwrapper card3"></div>
          </div>
          <div className="chart">
            <AreaChart
              width={1150}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
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
