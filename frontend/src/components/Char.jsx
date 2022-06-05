import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from "chart.js";
import { Bar } from "react-chartjs-2";
import axios from 'axios'
import TextField from '@mui/material/TextField';

import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';


function BarGraph() {
    const [month, setMonth] = useState([])

    const y = new Date();
    let ye = y.getFullYear();
    const [year, setYear] = useState(ye);

    useEffect(() => {
        axios.get('http://localhost:8070/InquiryForm/inquiry/count')
            .then((res) => {
                setMonth(res.data)
            })
            .catch((err) => {
                alert(err)
            })
    }, [])

    const yearHandler = (e) => {
        axios.get(`http://localhost:8070/InquiryForm/inquiry/count/${year}`)
            .then((res) => {
                setMonth(res.data)
            })
            .catch((err) => {
                alert(err)
            })
    }



    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
    const state = {
        labels: ["January", "February", "March", "April", "May", "June", "July", "Agust", "September", "October", "November", "December"],
        datasets: [
            {
                label: "Inquiries",
                backgroundColor: "rgb(30, 136, 229)",
                borderColor: "rgb(237, 231, 246)",
                borderWidth: 2,
                data: month,
            },
        ],
    };


    return (
        <div>
            <TextField id="standard-basic" variant="standard" value={year} onChange={(e) => { setYear(e.target.value) }} />
            <IconButton color="primary" aria-label="upload picture" component="span">
                <PhotoCamera />
            </IconButton>
            <Bar
                data={state}
                options={{
                    title: {
                        display: true,
                        text: "Inquiries per month",
                        fontSize: 20,
                    },
                    legend: {
                        display: true,
                        position: "right",
                    },
                }}
            />
        </div>
    )
}
export default BarGraph