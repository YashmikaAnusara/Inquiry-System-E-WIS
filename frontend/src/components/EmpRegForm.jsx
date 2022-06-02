import React, { useState } from 'react'
import '../css/EmpRegForm.css'
import axios from 'axios'
import Notification from './Alert'

function EmpRegForm() {
  const [active, setActive] = useState(false)
  const [type, setType] = useState()
  const [Name, setName] = useState('')
  const [NIC, setnic] = useState('')
  const [Contact, setContact] = useState('')
  const [Email, setEmail] = useState('')
  const [Branch, setBranch] = useState('')
  const [Position, setPosition] = useState('')

  const [message,setMessage]=useState()

  const data = {
    Name,
    NIC,
    Contact,
    Email,
    Branch,
    Position
  }

  const regHandler = () => {


    axios.post('http://localhost:8070/employee/register',data)
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
      })


  }

  return (
    <div className='emp-reg-form-wrapper'>
      <center> <input type='text' className='input-feilds' placeholder="Employee's Name..." onChange={(event) => { setName(event.target.value) }} /></center>
      <center> <input type='text' className='input-feilds' placeholder="Employee's NIC..." onChange={(event) => { setnic(event.target.value) }} /></center>
      <center> <input type='text' className='input-feilds' placeholder="Employee's Contact..." onChange={(event) => { setContact(event.target.value) }} /></center>
      <center> <input type='text' className='input-feilds' placeholder="Employee's Email..." onChange={(event) => { setEmail(event.target.value) }} /></center>
      <center> <select className='select-input-feilds' onChange={(event) => { setBranch(event.target.value) }}>
        <option value="">Select a Branch...</option>
        <option value="Test">Test</option>
        <option value="Test">Test</option>
      </select></center>
      <center> <select className='select-input-feilds' onChange={(event) => { setPosition(event.target.value) }}>
        <option value="">Select a Position...</option>
        <option value="Test">Secratory</option>
        <option value="Test">Secratory</option>
      </select></center>

      <center> <button className='reg-btn' onClick={regHandler}>Register</button></center>
      {active && <Notification type={type} message={message} />}

    </div>
  )
}

export default EmpRegForm