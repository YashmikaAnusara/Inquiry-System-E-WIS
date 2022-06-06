import React from 'react'
import '../css/Inquiriesdetail.css'
import DeleteIcon from '@mui/icons-material/Delete';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import axios from 'axios' 


function InquiriesDetail(props) {
    const deleteHandler = () => {
        const id = props.id
        const confirmBox = window.confirm("Are you sure want to remove?")
        if (confirmBox) {
            axios.get(`http://localhost:8070/InquiryForm/remove/${id}`)
                .then(() => {
                    alert("done")
                })
                .catch((err) => {
                    alert(err)
                })
        }
    }
    return (
        <div className='inquirie-detail-main-wrapper'>
            <div className='inquirie-detail-grp '>
                <div className='inquirie-detail-box'>
                    <div className='inquirie-detail-wrapper'><PersonIcon fontSize='small'/><p className='inquirie-details '>{props.firstName} {props.secondName}</p></div>
                    <div className='inquirie-detail-wrapper'><EmailIcon fontSize='small'/><p className='inquirie-details '>{props.email}</p></div>
                    <div className='inquirie-detail-wrapper '><CalendarMonthIcon fontSize='small'/><p className='inquirie-details '>{props.date}</p></div>
                </div>
                <div className='inquirie-detail-box'>
                    <div className='inquirie-detail-wrapper'><PhoneIcon fontSize='small'/><p className='inquirie-details '>{props.contact}</p></div>
                    <div className='inquirie-detail-wrapper'><MenuBookIcon fontSize='small'/><p className='inquirie-details '>{props.course}</p></div>
                    <div className='inquirie-detail-wrapper'><HomeIcon fontSize='small'/><p className='inquirie-details '>{props.branch}</p></div>
                </div>
                <div className='inquirie-detail-box'>
                    <div className='inquirie-message-wrapper'><MessageIcon /><p className='inquirie-message '>{props.message}</p></div>
                </div>
            </div>
            <button className='inquirie-action-btn' onClick={deleteHandler}><DeleteIcon /></button>
        </div>
    )
}

export default InquiriesDetail