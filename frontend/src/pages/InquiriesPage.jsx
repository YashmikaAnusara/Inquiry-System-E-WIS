import React, { useState, useEffect } from "react";
import AdminNavbar from "../components/AdminNavbar";
import "../css/InquiriesPage.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";

import InquiriesDetail from '../components/InquiriesDetail'

function InquiriesPage() {
  const params = useParams();
  const [details, setDetails] = useState([]);
  const [search,setSearch]=useState('')
  const branch = params.branch;
  const email = params.email;


    useEffect(() => {
        axios.get(`http://localhost:8070/InquiryForm/get/details/${branch}`)
        .then(res=>{
            setDetails(res.data)
        })
        .catch(err=>{
            alert(err)
        })
    },[branch])


    const filterteacher=details.filter(data=>{
        return data.email.toLowerCase().includes(search.toLowerCase())||data.course.toLowerCase().includes(search.toLowerCase())
    })
    

    return (
        <div>
            <div><AdminNavbar /></div>
            <div className='inquiry-content-Wrapper'>
                <div className="inquiry-content-wrapper">

                    <div className='inquiry-header'>
                        <div className='inquiry-search-wrapper'>
                            <input type='search' className='inquiry-search' placeholder='Search Email or Course...' onChange={(event)=>{setSearch(event.target.value)}}/>
                        </div>
                        <div className='inquiry-branch-wrapper'>

                            <div className='icon-wrapper'> <HomeIcon fontSize='small' className='inquiry-icon' /> <p className='inquiry-branch'>{branch}</p></div>
                            <div className='icon-wrapper'><EmailIcon fontSize='small' className='inquiry-icon' /> <p className='inquiry-branch'>{email}</p> </div>
                            
                        </div>
                    </div>
                    <div className='inquiry-body-wrapper clearfix'>
                        <div className='inquiry-details'>
                            {filterteacher.map((detail) => (
                                <div><InquiriesDetail firstName={detail.firstname} secondName={detail.secondname} email={detail.email} contact={detail.mobilenumber} course={detail.course} branch={detail.branch} message={detail.message} id={detail._id}/></div>
                            ))}
                        </div>
                    </div>
                </div>
                            </div>
                            </div>
 );
}

export default InquiriesPage;
