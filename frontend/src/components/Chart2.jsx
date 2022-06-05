import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import '../css/chart.css'

const myData = [
  { title: "Dogs", value: 100, color: "orange" },
  { title: "Cats", value: 50, color: "green" },
  { title: "Dragons", value: 40, color: "red" },
  { title: "Dragons", value: 80, color: "blue" },
  { title: "Dragons", value: 15, color: "pink" },
];

function Chart(){
  return (
    <div  >
      <PieChart
        // your data
        data={myData}
        // width and height of the view box
        viewBoxSize={[400, 400]}
        className='pie-chart'
      />
    </div>
  );
};

export default Chart;