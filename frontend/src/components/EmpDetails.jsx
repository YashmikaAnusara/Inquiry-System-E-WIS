import React from 'react'
import '../css/BranchDetails.css'
import EditIcon from '@mui/icons-material/Edit';

function EmpDetails(props) {
    return (
        <div className='detail-main-wrapper'>
            <div className='emp-detail-grp'>
                <p className='emp-details name'>{props.Name}</p>
                <p className='emp-details nic'>{props.NIC}</p>
                <p className='emp-details contact'>{props.Contact}</p>
                <p className='emp-details'>{props.Email}</p>
                <p className='emp-details pass'>{props.Password}</p>
            </div>
            
            <button className='emp-action-btn'><EditIcon/></button>

        </div>
    )
}

export default EmpDetails