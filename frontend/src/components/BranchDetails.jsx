import React from 'react'
import '../css/BranchDetails.css'
import EditIcon from '@mui/icons-material/Edit';

function BranchDetails(props) {
    return (
        <div className='detail-main-wrapper'>
            <div className='emp-detail-grp '>
                <p className='emp-details branch'>{props.Name}</p>
                <p className='emp-details branch'>{props.Contact}</p>
                <p className='emp-details branch'>{props.Email}</p>
            </div>
            <button className='emp-action-btn update'><EditIcon/></button>

        </div>
    )
}

export default BranchDetails