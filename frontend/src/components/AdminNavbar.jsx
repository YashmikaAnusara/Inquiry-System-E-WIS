import React from 'react'
import '../css/AdminNavbar.css'
import Pic from '../images/pic1.jpg'

function AdminNavbar() {
    return (
        <div>
            <div className='headerWraper'>
                
                <input type='search' placeholder='Search' className='searchInput' />
                <div className="usericonWrapper">
                    <img src={Pic} alt='Logo' className='userLogo' />
                </div>
            </div>
            <div className='navWraper'>
                <div className="headerContentsectionWrapper">
                    <p className='DashboardTopic'>Dashboard</p>
                    <div className='Dashboardcontent'>
                        <p className="Dashboardcontentext">Dashboard</p>
                    </div>
                </div>
                <div className="headerContentsectionWrapper">
                    <p className='DashboardTopic'>Dashboard</p>
                    <div className='Dashboardcontent'>
                        <p className="Dashboardcontentext">Dashboard</p>
                    </div>
                </div>
                <div className="headerContentsectionWrapper">
                    <p className='DashboardTopic'>Pages</p>
                    <div className='Dashboardcontent'>
                        <p className="Dashboardcontentext">test topic</p>
                        <p className="Dashboardcontentext">test topic</p>
                        <p className="Dashboardcontentext">test topic</p>
                        <p className="Dashboardcontentext">test topic</p>
                        <p className="Dashboardcontentext">test topic</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminNavbar