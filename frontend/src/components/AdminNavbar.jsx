import React, { useState, useEffect } from 'react'
import '../css/AdminNavbar.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import { Link } from 'react-router-dom'
import axios from 'axios';
import AccountMenu from './Menu';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Pic from '../images/pic5.png'


function AdminNavbar() {
    const [details, setDetails] = useState([])
     

    const time = new Date().getHours();
    let greeting;
    if (time < 10) {
      greeting = "Good Morning!";
    } else if (time < 20) {
      greeting = "Good Afternoon!";
    } else {
      greeting = "Good Evening!";
    }
    
    useEffect(() => {
        axios.get('http://localhost:8070/branch/get/details')
            .then((res) => {
                setDetails(res.data)
            })
            .catch(e => {
                alert(e)
            })
    }, [])


    return (
        <div>
            <div className='admin-headerWraper'>
                <div className='logo-wrapper'>
                    <div className='company-logo'><img src={Pic} alt="logo" className='company-image'/></div>
                    <div className='greeting-text'>{greeting} <WbSunnyIcon/></div> 
                </div>
                <div className='menu-wrapper'> <div className="admin-menu-icon"><AccountMenu /></div>   </div>
            </div>
            <div className='admin-navWraper'>
                <div className="headerContentsectionWrapper">
                    <p className='DashboardTopic'>Dashboard</p>
                    <Link to='/dashBoard'>
                        <div className='Dashboardcontent'>
                            <div className="Dashboardcontentext">
                                <DashboardIcon /><p className='DashboardcontenWord'> Dashboard</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="inquiry-header-section-Wrapper">
                    <p className='DashboardTopic'>Inquiries</p>
                    {details.map((detail) => (
                        <Link to={`/inquiry/${detail.Name}/${detail.Email}`}>
                            <div className='inquiry-dashboard-content'>
                                <div className="inquiry-dashboard-conten-text">
                                    <HomeIcon /><p className='inquiry-dashboard-conten-Word'> {detail.Name}</p>
                                </div>
                            </div>
                        </Link>

                    ))}
                </div>
                <div className="headerContentsectionWrapper">
                    <p className='DashboardTopic'>Configurations</p>
                    <Link to='/branch'>
                        <div className='Dashboardcontent'>
                            <div className="Dashboardcontentext">
                                <AddBusinessIcon /><p className='DashboardcontenWord'>Branches</p>
                            </div>
                        </div>
                    </Link>
                    <Link to='/employee'>
                        <div className='Dashboardcontent'>
                            <div className="Dashboardcontentext">
                                <PersonAddAlt1Icon /><p className='DashboardcontenWord'>Employees</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AdminNavbar