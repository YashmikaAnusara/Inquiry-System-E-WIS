import React, { useState } from 'react'
import '../css/AdminNavbar.css'
// import Pic from '../images/pic1.jpg'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddIcon from '@mui/icons-material/Add';
// import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom'
import BranchReg from './BranchRegForm';

function AdminNavbar() {
    const [active, setActive] = useState(false)
    const addBranchHandler = () => {
        setActive(true)
    }
    return (
        <div>
            {active ? <BranchReg /> : ''}

            <div className='headerWraper'>
                {/* <div className='search-wrapper'>

                <input type='search' placeholder='Search' className='searchInput' />
               </div> */}
                <div className='action-btns'>
                    <div className="addBranchWrapper">
                        <button className='addbranchBtn' onClick={addBranchHandler}><AddIcon /></button>
                    </div>
                    {/* <div className="usericonWrapper">
                        <img src={Pic} alt='Logo' className='userLogo' />
                    </div> */}
                </div>
            </div>
            <div className='navWraper'>
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
                <div className="headerContentsectionWrapper">
                    <p className='DashboardTopic'>Inquiries</p>
                    <Link to='/InquiryForm'>
                        <div className='Dashboardcontent'>
                            <div className="Dashboardcontentext">
                                <DashboardIcon /><p className='DashboardcontenWord'> All Inquiry </p>
                            </div>
                        </div>
                    </Link>
                    <Link to='/InquiryForm'>
                        <div className='Dashboardcontent'>
                            <div className="Dashboardcontentext">
                                <DashboardIcon /><p className='DashboardcontenWord'> Branch Inquiry</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="headerContentsectionWrapper">
                    <p className='DashboardTopic'>Configurations</p>
                    <Link to='/addbranch'>
                        <div className='Dashboardcontent'>
                            <div className="Dashboardcontentext">
                                <DashboardIcon /><p className='DashboardcontenWord'>Add Branch</p>
                            </div>
                        </div>
                    </Link>
                    <Link to='/addemployee'>
                        <div className='Dashboardcontent'>
                            <div className="Dashboardcontentext">
                                <DashboardIcon /><p className='DashboardcontenWord'>Add Employee</p>
                            </div>
                        </div>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}

export default AdminNavbar