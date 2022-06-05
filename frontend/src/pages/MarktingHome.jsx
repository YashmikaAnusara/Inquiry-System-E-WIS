import React, { useState, useEffect } from "react";
import "../css/MarketingHome.css";
import MarketingNavBar from "../components/MarketingNavBar";
import { AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";
import axios from "axios";

const data = [
  {
    name: "Page A",
    uv: 1300,
  },
  {
    name: "Page B",
    uv: 200,
  },
  {
    name: "Page C",
    uv: 500,
  },
  {
    name: "Page D",
    uv: 900,
  },
  {
    name: "Page E",
    uv: 1000,
  },
];

export default function MarktingHome() {
  const [Inquiry, setInquiry] = useState([]);

  useEffect(() => {
    const branch = sessionStorage.getItem("Managerbranch");
    axios
      .get(`http://localhost:8070/InquiryForm/Get/${branch}`)
      .then((res) => {
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
            <div className="cardwrapper card1"></div>
            <div className="cardwrapper card2"></div>
            <div className="cardwrapper card3"></div>
          </div>
          <div className="chart">
            {/* {Inquiry.map((data, index) => ( */}
            {/* <div key={index}> */}
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
            {/* </div> */}
            {/* ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}
