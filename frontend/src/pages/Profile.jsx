import React, { useState } from 'react'
import AdminNavbar from '../components/AdminNavbar'
import "../css/AdminProfile.css"
import PersonIcon from '@mui/icons-material/Person';
import SecurityIcon from '@mui/icons-material/Security';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Logo from '../images/pic6.png'
import axios from 'axios';

function Profile() {
    
    const id=sessionStorage.getItem('adminId')
    const email=sessionStorage.getItem('adminEmail')
    const cpassword=sessionStorage.getItem('adminpassword')


    const [actOver, setActOver] = useState(true)
    const [actSec, setActSec] = useState(false)
    const [passActive, setPassActive] = useState(false)
    const [emaiActive, setEmailActive] = useState(false)
    const [emaiActive1, setEmailActive1] = useState(true)

    const[password,setPassword]=useState('')
    const[repassword,setRepassword]=useState('')

    const[currentEmail,setCurrentEmail]=useState('')
    const[newEmail,setNewEmail]=useState('')
    const[reNewEmail,setReNewEmail]=useState('')

    const Handler1 = () => {
        setActSec(false)
        setActOver(true)
    }
    const Handler2 = () => {
        setActSec(true)
        setActOver(false)
    }
    const visibilityHandler = () => {
        setPassActive(!passActive)
    }
    const editEmailFormHadler = () => {
        setEmailActive(!emaiActive)
        setEmailActive1(!emaiActive1)
    }

    const emailChangeHandler=()=>{
        if(currentEmail===''||newEmail===''||reNewEmail==='')
        {
            alert("Email cannot be empty!")
        }
        else if(currentEmail!==email)
        {
            alert("Current email is invalid!")
        }
        else if(newEmail!==reNewEmail){
            alert("New emails are not matching")
        }
        else if(currentEmail===newEmail){
            alert('Current email ane new email cannot be same!')
        }
        else{
            axios.put(`http://localhost:8070/Login/email/update/${id}/${reNewEmail}`)
            .then(()=>{
                alert("Email updated successfully!")
            })
            .catch(err=>{
                alert(err)
            })
        }
    }

    const changePasswordHandler=()=>{
        if(password===''||repassword===''){
            alert("Passwords cannot be empty!")
        }
        else if(password!==repassword){
            alert("Password is not matching!")
        }
        else{
            axios.put(`http://localhost:8070/Login/password/update/${id}/${repassword}`)
            .then(()=>{
                alert("Password updated successfully!")
            })
            .catch(err=>{
                alert(err)
            })
        }
    }

    return id &&(
        <div>
            <div><AdminNavbar /></div>
            <div className='profile-content-Main-Wrapper'>
                <div className="profile-content-body-wrapper">
                    <div className='admin-profile-wrapper'>
                        <button className='profile-action-btn' onClick={Handler1}><PersonIcon /></button>
                        <button className='profile-action-btn' onClick={Handler2}><SecurityIcon /></button>
                    </div>

                    {actOver && <div className="overview-wrapper clearfix">
                        <div className='over-info'>
                            <h3>Welcome!!!</h3>
                            <p>Minimum 8 characters long, uppercase and symbol</p>
                        </div>
                        <div className='email-change-wrapper'>
                            <div className="ovr-main-wrapper">
                                <div className='ovr-detail-wrapper'><PersonIcon fontSize='medium' /><p className='ovr-detail'> {email}</p></div>
                                <div className='ovr-detail-wrapper'><VisibilityIcon fontSize='medium' className='ovr-pass-btn' onClick={visibilityHandler} />{passActive ? <p className='ovr-detail'>{cpassword}</p> : <p className='ovr-detail'> ########</p>}</div>
                                <button className='change-email-btn' onClick={editEmailFormHadler}>Change Email</button>
                            </div><br />
                            {emaiActive1 && <div className="logo-main-wrapper">
                                <img src={Logo} alt="Admin Logo" width={200} />
                            </div>}

                            {emaiActive && <div className="change-email-main-wrapper">
                                <div className='ovr-detail-wrapper'><input type='email' placeholder='Current Email...' className='email-inputs' onChange={(e)=>{setCurrentEmail(e.target.value)}}/></div>
                                <div className='ovr-detail-wrapper'><input type='text' placeholder='New Email...' className='email-inputs' onChange={(e)=>{setNewEmail(e.target.value)}}/></div>
                                <div className='ovr-detail-wrapper'><input type='text' placeholder='Confirm Email...' className='email-inputs' onChange={(e)=>{setReNewEmail(e.target.value)}}/></div>
                                <button className='change-email-btn' onClick={emailChangeHandler}>Change</button>
                            </div>}
                        </div>
                    </div>}
                    {actSec && <div className="security-wrapper clearfix">
                        <div className='sec-info'>
                            <h3>Ensure that these requirements are met</h3>
                            <p>Minimum 8 characters long, uppercase and symbol</p>
                        </div>
                        <div className='sec-inputs-wrapper'>
                            <center>
                                <input type='text' className='sec-inputs' placeholder='New Password...' onChange={(e)=>{setPassword(e.target.value)}}/>
                                <input type='text' className='sec-inputs' placeholder='Confirm Password...' onChange={(e)=>{setRepassword(e.target.value)}}/>
                            </center>
                            <button className='change-pass-btn' onClick={changePasswordHandler}>Change Password</button>
                        </div>

                    </div>}


                </div>
            </div>
        </div>
    )
}

export default Profile