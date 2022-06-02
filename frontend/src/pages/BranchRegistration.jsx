import React, { useState } from 'react'
import AdminNavbar from '../components/AdminNavbar'
import '../css/BranchRegistration.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BranchRegForm from '../components/BranchRegForm';
import CloseIcon from '@mui/icons-material/Close';
import BranchDetails from '../components/BranchDetails';

function BranchRegistration() {
    const [active, setActive] = useState(false);
    const addBranchHandler = () => {
        setActive(!active)
    }
    const closeHandler = () => {
        setActive(!active)
    }
    return (
        <div>
            <div><AdminNavbar /></div>
            <div className='branchcontentMainWrapper'>
                <div className="branchcontentbodywrapper">
                    <div className='branch-header'>
                        <div className='branch-search-wrapper'>
                            <input type='search' className='branch-search' placeholder='Search Branch...' />
                        </div>
                        <div className='branch-add-wrapper'>
                            <button className='branch-add-btn' onClick={addBranchHandler}><AddCircleIcon fontSize='large' /></button>
                        </div>
                    </div>
                    <div className='branch-body-wrapper clearfix'>
                        <div className='emp-reg-form'>
                            {/* {details.map((detail) => ( */}
                                <BranchDetails />
                                <BranchDetails />
                                <BranchDetails />
                            {/* ))} */}
                        </div>
                    </div>



                </div>
            </div>
            {
                active && (
                    <div className='branch-popup-form'>
                        <button className='btn-close' onClick={closeHandler}><CloseIcon fontSize='medium' /></button>
                        <BranchRegForm />
                    </div>
                )
            }
        </div >
    )
}

export default BranchRegistration