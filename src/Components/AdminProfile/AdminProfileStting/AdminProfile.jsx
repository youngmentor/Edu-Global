import React from 'react'
import "./AdminProfile.css"
import { useRef } from 'react'
import { AiOutlinePhone,AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
const AdminProfile = () => {
  const inputRef = useRef()
  return (
    <div className='AdminProfile_Update'>
      <div className='AdminProfile_Update_Wrap'>
        <div className='AdminProfile_Update_SubWrap1'>
          <div className='AdminPtofile_text'>
            <h4>Please Enter a New password and Email</h4>
          </div>
          <input type="file" className='AdminUpdate' ref={inputRef} placeholder="Select Your School Logo " />
          <input type="passowrd" className='AdminUpdate' ref={inputRef} placeholder="Name Of School" />
          <input type="passowrd" className='AdminUpdate' ref={inputRef} placeholder="Target Line" />
          <input type="number" className='AdminUpdate' ref={inputRef} placeholder="Phone Number" />
          <input type="passowrd" className='AdminUpdate' ref={inputRef} placeholder="Country" />
          <input type="passowrd" className='AdminUpdate' ref={inputRef} placeholder="Address" />
          <button className='AdminUpdate_Bttn' >Update</button>
        </div>
        <div className='AdminProfile_Update_SubWrap2'>
          <h4>Your School Profile</h4>
          <img src='./NewLogo1.png' className='AdminProfile_Logo' />
          <h4>The curve Africa</h4>
          <p>Senior secondary school</p>
          <hr className='line'/>
          <div className='AdminProfileUpdate_Details'>
             <AiOutlinePhone/><p>0914356785</p>
          </div>
          <div className='AdminProfileUpdate_Details'>
          <AiOutlineMail/> <p>olaleresuliton@gmail.com</p>
          </div>
          <hr className='line'/>
          <GoLocation/>
          <h4>37, Arogundade Street </h4>
          <h5>Nigeria</h5>
        </div>
      </div>
    </div>
  )
}

export default AdminProfile