import React, { useState, useEffect } from 'react'
import AdminNavbar from "../components/AdminNavbar";
import '../css/EmpRegistration.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EmpRegForm from '../components/EmpRegForm';
import CloseIcon from '@mui/icons-material/Close';
import EmpDetails from '../components/EmpDetails';
import axios from 'axios';

function EmpRegistration() {
    const [active, setActive] = useState(false);
    const [details, setDetails] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8070/employee/get/details')
            .then((res) => {
                setDetails(res.data)
            })
            .catch(e => {
                alert(e)
            })


    }, [])

    const addFormHandler = () => {
        setActive(!active)
    }
    const closeHandler = () => {
        setActive(!active)
    }

    return (
        <div>
            <div><AdminNavbar /></div>
            <div className='empcontentMainWrapper'>
                <div className="empcontentbodywrapper">

                    <div className='emp-header'>
                        <div className='emp-search-wrapper'>
                            <input type='search' className='emp-search' placeholder='Search Employee...' />
                        </div>
                        <div className='emp-add-wrapper'>
                            <button onClick={addFormHandler} className='emp-add-btn'><AddCircleIcon fontSize='large' /></button>
                        </div>
                    </div>
                    
                    <div className='emp-body-wrapper clearfix'>
                        <div className='emp-reg-form'>
                            
                            {details.map((detail) => (
                                <div><EmpDetails Name={detail.Name} NIC={detail.NIC} Contact={detail.Contact} Email={detail.Email} Password={detail.Password}/></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {active && (
                <div className='emp-popup-form'>
                    <button className='btn-close' onClick={closeHandler}><CloseIcon fontSize='medium' /></button>
                    <EmpRegForm />
                </div>
            )}
        </div>
    )
}




export default EmpRegistration