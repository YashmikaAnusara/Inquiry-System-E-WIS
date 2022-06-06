import React, { useState,useEffect } from 'react'
import AdminNavbar from '../components/AdminNavbar'
import '../css/BranchRegistration.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BranchRegForm from '../components/BranchRegForm';
import CloseIcon from '@mui/icons-material/Close';
import BranchDetails from '../components/BranchDetails';
import axios from 'axios';

function BranchRegistration() {
    const [active, setActive] = useState(false);
    const [details,setDetails]=useState([])
    const [search,setSearch]=useState('')
    const session=sessionStorage.getItem('adminId')
    
    const addBranchHandler = () => {
        setActive(!active)
    }
    const closeHandler = () => {
        setActive(!active)
    }

     

    useEffect(()=>{
        axios.get('http://localhost:8070/branch/get/details')
        .then((res)=>{
            setDetails(res.data)
        })
        .catch(e=>{
            alert(e)
        })

    },[])
 
    const filter=details.filter(data=>{
        return data.Email.toLowerCase().includes(search.toLowerCase())||data.Name.toLowerCase().includes(search.toLowerCase())
      })


    return  session &&(
        <div>
            <div><AdminNavbar /></div>
            <div className='branchcontentMainWrapper'>
                <div className="branchcontentbodywrapper">
                    <div className='branch-header'>
                        <div className='branch-search-wrapper'>
                            <input type='search' className='branch-search' placeholder='Search Branch...' onChange={(event)=>{setSearch(event.target.value)}}/>
                        </div>
                        <div className='branch-add-wrapper'>
                            <button className='branch-add-btn' onClick={addBranchHandler}><AddCircleIcon className='add-btn' fontSize='large' /></button>
                        </div>
                    </div>
                    <div className='branch-body-wrapper clearfix'>
                        <div className='branch-reg-form'>
                            {filter.map((detail) => (
                                <BranchDetails Name={detail.Name} Contact={detail.Contact} Email={detail.Email} id={detail._id}/>
                            ))}
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