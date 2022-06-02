import React from "react";
import '../css/AdminHome.css'
import AdminNavbar from "../components/AdminNavbar";
import Graph from "../components/Char";


function AdminHome() {
    return (
        <div>
            <div><AdminNavbar /></div>
            <div className='contentMainWrapper'>
                <div className="contentbodywrapper">
                    <div className="cardMainWrapper">
                        <div className='cardwrapper card1'>

                        </div>
                        <div className='cardwrapper card2'>

                        </div>
                        <div className='cardwrapper card3'>

                        </div>
                         
                         
                         
                    </div>
                    <div className='graph'>
                        <Graph />
                    </div>
                    <div className='graph'>
                        <Graph />
                    </div>
                     

                </div>
            </div>

            

        </div>
    )
}
export default AdminHome;