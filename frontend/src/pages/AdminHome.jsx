import React from "react";
import '../css/AdminHome.css'
import AdminNavbar from "../components/AdminNavbar";
// import Graph from "../components/Char";


function AdminHome() {
    return (
        <div>
            <div><AdminNavbar /></div>
            <div className='contentMainWrapper'>
                <div className="contentbodywrapper">
                    <div className="cardMainWrapper">
                        <div className='cardwrapper card1'>
                            <div><p>120</p></div>
                            <div><p>120</p></div>
                        </div>

                        <div className='cardwrapper card3'>
                            <div><p>120</p></div>
                            <div><p>120</p></div>
                        </div>
                    </div>
                    {/* <div className='graph'>
                        <Graph />
                    </div>
                    <div className='graph'>
                        <Graph />
                    </div> */}
                </div>
            </div>



        </div>
    )
}
export default AdminHome;