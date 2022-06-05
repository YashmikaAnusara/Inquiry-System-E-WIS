import React, { useState, useEffect } from 'react'
import '../css/EditDetails.css'
import axios from 'axios'
import Notification from './Alert'

function EditDetails(props) {
  const [active, setActive] = useState(false)
  const [details, setDetails] = useState([])
  const [type, setType] = useState()
  const [message, setMessage] = useState()

  const currentEmail = props.email

  const id = props.id
  const [Name, setName] = useState(props.name)
  const [NIC, setnic] = useState(props.nic)
  const [Contact, setContact] = useState(props.contact)
  const [Email, setEmail] = useState(props.email)
  const [Branch, setBranch] = useState(props.branch)
  const [BranchTwo, setBranchTow] = useState(props.branch2)
  const [BranchThree, setBranchThree] = useState(props.branch3)
  const [Position, setPosition] = useState(props.position)
  const [Password, setPassword] = useState(props.password)

  useEffect(() => {
    axios.get('http://localhost:8070/branch/get/details')
      .then((res) => {
        setDetails(res.data)
      })
      .catch(e => {
        alert(e)
      })

  }, [])

  const data = {
    Name,
    NIC,
    Contact,
    Email,
    Branch,
    BranchTwo,
    BranchThree,
    Position,
    Password
  }

  const regHandler = () => {

    axios.put(`http://localhost:8070/employee/update/${id}`, data)
      .then(() => {
        axios.put(`http://localhost:8070/employee/update/login/${currentEmail}`, data)
        setType("success")
        setMessage("Updated successfully")
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
    <div className='emp-edit-form-wrapper'>
      <center> <input type='text' className='edit-input-feilds' placeholder="Employee's Name..." value={Name} onChange={(event) => { setName(event.target.value) }} /></center>
      <center> <input type='text' className='edit-input-feilds' placeholder="Employee's NIC..." value={NIC} onChange={(event) => { setnic(event.target.value) }} /></center>
      <center> <input type='text' className='edit-input-feilds' placeholder="Employee's Contact..." value={Contact} onChange={(event) => { setContact(event.target.value) }} /></center>
      <center> <input type='text' className='edit-input-feilds' placeholder="Employee's Email..." value={Email} onChange={(event) => { setEmail(event.target.value) }} /></center>
      <center> <select className='edit-select-input-feilds' onChange={(event) => { setBranch(event.target.value) }} value={Branch}>
        <option value="">Select first Branch...</option>
        {details.map((detail) => (
          <option value={detail.Name}>{detail.Name}</option>
        ))}
      </select></center>
      <center> <select className='edit-select-input-feilds' onChange={(event) => { setBranchTow(event.target.value) }} value={BranchTwo}>
        <option value="">Select second Branch...</option>
        {details.map((detail) => (
          <option value={detail.Name}>{detail.Name}</option>
        ))}
      </select></center>
      <center> <select className='edit-select-input-feilds' onChange={(event) => { setBranchThree(event.target.value) }} value={BranchThree}>
        <option value="">Select third Branch...</option>
        {details.map((detail) => (
          <option value={detail.Name}>{detail.Name}</option>
        ))}
      </select></center>

      <center> <select className='edit-select-input-feilds' onChange={(event) => { setPosition(event.target.value) }} value={Position}>
        <option value="">Select a Position...</option>
        <option value="Manager">Manager</option>
        <option value="Marketing">Marketing</option>
      </select></center>
      <center> <input type='text' className='edit-input-feilds edit-password' placeholder="Employee's Password..." value={Password} onChange={(event) => { setPassword(event.target.value) }} /></center>

      <center> <button className='reg-btn' onClick={regHandler}>Update</button></center>
      {active && <Notification type={type} message={message} />}

    </div>
  )
}

export default EditDetails