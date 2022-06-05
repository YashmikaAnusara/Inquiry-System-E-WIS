import React,{useEffect,useState} from "react";
import '../css/AdminHome.css'
import AdminNavbar from "../components/AdminNavbar";
// import BarGraph from "../components/Char";
import axios from "axios";

import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
// import Chart from "../components/Chart2";
 
function AdminHome() {
    const [empCount,setEmpCount]=useState('')
    const [branchCount,setBranchCount]=useState('')
    useEffect(()=>{
        axios.get('http://localhost:8070/employee/count')
        .then((res)=>{
            setEmpCount(res.data)
        })
        .catch((err)=>{
            alert(err)
        })
        axios.get('http://localhost:8070/branch/count')
        .then((res)=>{
            setBranchCount(res.data)
        })
        .catch((err)=>{
            alert(err)
        })
    },[])

    return (
        <div>
            <div><AdminNavbar /></div>
            <div className='contentMainWrapper'>
                <div className="contentbodywrapper">
                    <div className="card-main-wrapper">
                        <div className='card-wrapper card11'>
                            <div className="card-icon"><PersonIcon fontSize="large"/></div>
                            <div className="card-detail"><p>{empCount}</p><p className="card-name">Total Employees</p></div>
                        </div>

                        <div className='card-wrapper card22'>
                        <div className="card-icon"><AccountBalanceIcon fontSize="large"/></div>
                            <div className="card-detail"><p>{branchCount}</p><p className="card-name">Total Branches</p></div>
                        </div>
                    </div>
                    <div className='admin-graph'>
                        {/* <BarGraph /> */}
                        {/* <Chart/> */}
                    </div>

                </div>
            </div>



        </div>
    )
}
export default AdminHome;