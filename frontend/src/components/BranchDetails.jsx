import React from 'react'
import '../css/BranchDetails.css'
import DeleteIcon from '@mui/icons-material/Delete';
import PhoneIcon from '@mui/icons-material/Phone';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import HomeIcon from '@mui/icons-material/Home';
import axios from 'axios';

function BranchDetails(props) {
    const deleteHandler = () => {
        const id = props.id
        const confirmBox = window.confirm("Are you sure want to remove?")
        if (confirmBox) {
            axios.get(`http://localhost:8070/branch/remove/${id}`)
                .then(() => {
                    alert("done")
                })
                .catch((err) => {
                    alert(err)
                })

        }
    }
    return (
        <div className='branch-detail-main-wrapper'>
            <div className='branch-detail-grp '>
                <div className='branch-detail-wrapper'><HomeIcon fontSize='small' /><p className='branch-details '>{props.Name}</p></div>
                <div className='branch-detail-wrapper'><PhoneIcon fontSize='small' /><p className='branch-details '>{props.Contact}</p></div>
                <div className='branch-detail-wrapper'><MarkunreadIcon fontSize='small' /><p className='branch-details '>{props.Email}</p></div>
            </div>
            <button className='branch-action-btn' onClick={deleteHandler}><DeleteIcon /></button>
        </div>
    )
}

export default BranchDetails