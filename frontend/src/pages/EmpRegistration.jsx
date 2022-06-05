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
    const [search,setSearch]=useState('')

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

    const filterteacher=details.filter(data=>{
        return data.NIC.toLowerCase().includes(search.toLowerCase())||data.Name.toLowerCase().includes(search.toLowerCase())||data.Email.toLowerCase().includes(search.toLowerCase())||data.Position.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div>
            <div><AdminNavbar /></div>
            <div className='empcontentMainWrapper'>
                <div className="empcontentbodywrapper">

                    <div className='emp-header'>
                        <div className='emp-search-wrapper'>
                            <input type='search' className='emp-search' placeholder="Search Employee..." onChange={(event)=>{setSearch(event.target.value)}}/>
                        </div>
                        <div className='emp-add-wrapper'>
                            <button onClick={addFormHandler} className='emp-add-btn'><AddCircleIcon fontSize='large' className='add-btn'/></button>
                        </div>
                    </div>
                    
                    <div className='emp-body-wrapper clearfix'>
                        <div className='emp-reg-form'>
                            
                            {filterteacher.map((detail) => (
                                <div><EmpDetails id={detail._id} Name={detail.Name} NIC={detail.NIC} Contact={detail.Contact} Email={detail.Email} Password={detail.Password} Branch1={detail.Branch} Branch2={detail.Branch_Two} Branch3={detail.Branch_Three} Position={detail.Position}/></div>
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