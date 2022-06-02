import React, { useState, useEffect } from 'react'
import '../css/BranchRegForm.css'
import Notification from './Alert'
import axios from 'axios'
function BranchReg() {
  const [active, setActive] = useState(false)
  const [type, setType] = useState("success")
  const [message, setMessage] = useState()
  const [details, setDetails] = useState([])

  const [Name, setName] = useState('');
  const [Contact, setContact] = useState('');
  const [Email, setEmail] = useState('');

  const data = {
    Name,
    Contact,
    Email
  }
  const regHandler = () => {
    if (Name === '') {
      alert('Name is Requird!')
    }
    else if (Contact === '') {
      alert('Contact is Requird!')
    }
    else if (Email === '') {
      alert('Email is Requird!')
    }
    else {
      axios.post('http://localhost:8070/branch/register', data)
        .then(() => {
          setType("success")
          setMessage("Done")
          setActive(true)
          setTimeout(() => {
            setActive(false)
          }, 4000)

        })
        .catch(() => {
          setType("erorr")
          setMessage("Error")
           setActive(true)
          setTimeout(() => {
            setActive(false)
          }, 4000)
        })
    }
  }
  useEffect(() => {

  }, [])


  return (
    <div className='branch-reg-form-wrapper'>
      <center> <input type='text' className='branch-input-feilds' placeholder="Branch Name..." onChange={(e) => { setName(e.target.value) }} /></center>
      <center> <input type='text' className='branch-input-feilds' placeholder="Branch Email..." onChange={(e) => { setEmail(e.target.value) }} /></center>
      <center> <input type='text' className='branch-input-feilds' placeholder="Branch Contact..." onChange={(e) => { setContact(e.target.value) }} /></center>

      <center> <button className='branch-reg-btn' onClick={regHandler}>Register</button></center>
      {active && <Notification type={type} message={message} />}

    </div>
  )
}

export default BranchReg