// import React from 'react'
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from "chart.js";
// import { Bar } from "react-chartjs-2";

// function Graph() {
//     ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
//     const state = {
//         labels: ["January", "February", "March", "April", "May","June","July","Agust","September","October","November","December"],
//         datasets: [
//             {
//                 label: "Inquiries",
//                 backgroundColor: "rgb(30, 136, 229)",
//                 borderColor: "rgb(237, 231, 246)",
//                 borderWidth: 2,
//                 data: [65, 59, 80, 81, 56,78,65, 59, 80, 81, 56,78],
//             },
//         ],
//     };
//     return (
//         <div>
//             <Bar
//                 data={state}
//                 options={{
//                     title: {
//                         display: true,
//                         text: "Inquiries per month",
//                         fontSize: 20,
//                     },
//                     legend: {
//                         display: true,
//                         position: "right",
//                     },
//                 }}
//             />
//         </div>
//     )
// }
// export default Graph