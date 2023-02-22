import React from 'react'
import "./AdminProfile.css"
import { useRef } from 'react'
const AdminProfile = () => {
  const inputRef=useRef()
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
          <div>
            come to my bed room
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminProfile