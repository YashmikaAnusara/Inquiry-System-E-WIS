import React, { useState } from 'react'
import '../css/EmpDetails.css'
import EditIcon from '@mui/icons-material/Edit';
import EditDetails from './EditDetails';
import CloseIcon from '@mui/icons-material/Close';
import NfcIcon from '@mui/icons-material/Nfc';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import HomeIcon from '@mui/icons-material/Home';

function EmpDetails(props) {
    const [active, setActive] = useState(false);
    const [visible,setVisible]=useState(false)

    const editHandler = () => {
        setActive(!active)
    }
    const closeHandler = () => {
        setActive(!active)
    }

    const seeHandler=()=>{
        setVisible(!visible)
         
    }


    return (
        <div className='detail-main-wrapper'>
            <div className='emp-detail-grp'>
                <div >
                    <div className='detail-line'> <PersonIcon fontSize='small'/><p className='emp-details name'>{props.Name}</p></div>
                    <div className='detail-line'> <NfcIcon fontSize='small'/><p className='emp-details nic'>{props.NIC}</p></div>
                    <div className='detail-line'> <HomeIcon fontSize='small'/><p className='emp-details nic'>{props.Branch1}</p></div>
                </div>
                <div >
                    <div className='detail-line'><PhoneIcon fontSize='small'/><p className='emp-details contact'>{props.Contact}</p></div>
                    <div className='detail-line'><MarkunreadIcon fontSize='small'/><p className='emp-details'>{props.Email}</p></div>
                    <div className='detail-line'> <HomeIcon fontSize='small'/><p className='emp-details nic'>{props.Branch2}</p></div>
                </div >
                <div >
                    <div className='detail-line'><NfcIcon fontSize='small'/> <p className='emp-details  '>{props.Position}</p></div>
                    <div className='detail-line'><button onClick={seeHandler} className="password-btn"> <RemoveRedEyeIcon fontSize='small'/></button> <p className='emp-details'>{visible?props.Password:"########"}</p></div>
                    <div className='detail-line'> <HomeIcon fontSize='small'/><p className='emp-details nic'>{props.Branch3}</p></div>
                </div>
            </div>

            <button className='emp-action-btn' onClick={editHandler}><EditIcon /></button>


            {
                active && (
                    <div className='edit-popup-form'>
                        <button className='edit-btn-close' onClick={closeHandler}><CloseIcon fontSize='medium' /></button>
                        <EditDetails name={props.Name} nic={props.Name} contact={props.Contact} email={props.Email} branch={props.Branch} password={props.Password} />
                    </div>
                )
            }
        </div>
    )
}

export default EmpDetails