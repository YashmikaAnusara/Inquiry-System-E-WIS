import React, { useState } from 'react'
import '../css/EmpRegForm.css'
import axios from 'axios'
import Notification from './Alert'

function EmpRegForm() {
  const [active, setActive] = useState(false)
  const [type, setType] = useState("success")


  
  const regHandler = () => {
    // axios.post()
    //   .then(res => {
    setActive(true)
    setTimeout(() => {
      setActive(false)
    }, 3000)
    // .catch((err) => {
    //   alert(err)
    // })
  }

  return (
    <div className='emp-reg-form-wrapper'>
      <center> <input type='text' className='input-feilds' placeholder="Employee Name..." /></center>
      <center> <input type='text' className='input-feilds' placeholder="Employee Name..." /></center>
      <center> <input type='text' className='input-feilds' placeholder="Employee Name..." /></center>
      <center> <select className='select-input-feilds'>
        <option value="select">Select a Branch...</option>
        <option value="saab">Saab</option>
      </select></center>

      <center> <button className='reg-btn' onClick={regHandler}>Register</button></center>
      {active && <Notification type={type} message="Done" />}

    </div>
  )
}

export default EmpRegForm