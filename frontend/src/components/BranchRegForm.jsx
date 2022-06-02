import React, { useState, useEffect } from 'react'
import '../css/BranchRegForm.css'
import Notification from './Alert'
import axios from 'axios'
function BranchReg() {
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
    <div className='branch-reg-form-wrapper'>
      <center> <input type='text' className='branch-input-feilds' placeholder="Branch Name..." /></center>
      <center> <input type='text' className='branch-input-feilds' placeholder="Branch Name..." /></center>
      <center> <input type='text' className='branch-input-feilds' placeholder="Branch Name..." /></center>
      <center> <input type='text' className='branch-input-feilds' placeholder="Branch Name..." /></center>
      <center> <button className='branch-reg-btn' onClick={regHandler}>Register</button></center>
      {active && <Notification type={type} message="Done" />}

    </div>
  )
}

export default BranchReg