import React from "react";
import '../css/AdminHome.css'
import AdminNavbar from "../components/AdminNavbar";
// import BarGraph from "../components/Char";


function AdminHome() {
    return (
        <div>
            <div><AdminNavbar /></div>
            <div className='contentMainWrapper'>
                <div className="contentbodywrapper">
                    <div className="card-main-wrapper">
                        <div className='card-wrapper card1'>
                            <div><p>120</p></div>
                            <div><p>120</p></div>
                        </div>

                        <div className='card-wrapper card3'>
                            <div><p>120</p></div>
                            <div><p>120</p></div>
                        </div>
                    </div>
                    <div className='admin-graph'>
                        {/* <BarGraph /> */}
                    </div>

                </div>
            </div>



        </div>
    )
}
export default AdminHome;