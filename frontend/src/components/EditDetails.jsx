import React, { useState,useEffect } from 'react'
import '../css/EditDetails.css'
import axios from 'axios'
import Notification from './Alert'

function EditDetails(props) {
    const [active, setActive] = useState(false)
    const [details,setDetails]=useState([])
    const code=(Math.floor((Math.random() * 1000000) + 1))
    const [type, setType] = useState()
    const [message,setMessage]=useState()
    
    const [Name, setName] = useState('')
    const [NIC, setnic] = useState('')
    const [Contact, setContact] = useState('')
    const [Email, setEmail] = useState('')
    const [Branch, setBranch] = useState('')
    const [Position, setPosition] = useState('')
    const Password=code.toString()
  
    useEffect(()=>{
      axios.get('http://localhost:8070/branch/get/details')
      .then((res)=>{
          setDetails(res.data)
      })
      .catch(e=>{
          alert(e)
      })
  
  },[])

  
  
    const data = {
      Name,
      NIC,
      Contact,
      Email,
      Branch,
      Position,
      Password
    }
  
    const regHandler = () => {
  
      axios.post('',data)
        .then(() => { 
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
      <center> <input type='text' className='edit-input-feilds' placeholder="Employee's Name..." onChange={(event) => { setName(event.target.value) }} value={props.name}/></center>
      <center> <input type='text' className='edit-input-feilds' placeholder="Employee's NIC..." onChange={(event) => { setnic(event.target.value) }} /></center>
      <center> <input type='text' className='edit-input-feilds' placeholder="Employee's Contact..." onChange={(event) => { setContact(event.target.value) }} /></center>
      <center> <input type='text' className='edit-input-feilds' placeholder="Employee's Email..." onChange={(event) => { setEmail(event.target.value) }} /></center>
      <center> <select className='edit-select-input-feilds' onChange={(event) => { setBranch(event.target.value) }}>
        <option value="">Select a Branch...</option>
        {details.map((detail)=>(
          <option value={detail.Name}>{detail.Name}</option>
        ))}        
      </select></center>
      <center> <select className='edit-select-input-feilds' onChange={(event) => { setPosition(event.target.value) }}>
        <option value="">Select a Position...</option>
        <option value="Test">Secratory</option>
        <option value="Test">Secratory</option>
      </select></center>

      <center> <button className='reg-btn' onClick={regHandler}>Register</button></center>
      {active && <Notification type={type} message={message} />}

    </div>
  )
}

export default EditDetails