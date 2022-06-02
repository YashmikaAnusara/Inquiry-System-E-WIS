import React from 'react'
import '../css/BranchDetails.css'

function BranchDetails(props) {
    return (
        <div className='detail-main-wrapper'>
            <div className='emp-detail-grp'>
                <p className='emp-details'>{props.Name}</p>
                <p className='emp-details'>{props.NIC}</p>
                <p className='emp-details'>{props.Contact}</p>
                <p className='emp-details'>{props.Email}</p>
            </div>
            
            <button className='emp-action-btn update'>Update</button>
            <button className='emp-action-btn delete'>Delete</button>

        </div>
    )
}

export default BranchDetails