import React, { useState } from 'react'
import "./AdminProfile.css"
import { useRef } from 'react'
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { useSelector } from 'react-redux';
import axios from 'axios';
const AdminProfile = () => {
  const user = useSelector((state) => state.Commerce.user)
  // const [Update, setUpdate] =useState()
  const [profile, setProfile] = useState({
    nameOfSchool: "",
    phoneNumber: "",
    address: "",
    targetLine: "",
    website: "",
    country: "",
    schoolImage: "",
    email: "",
  })
  const inputRef = useRef()
const handleChange = (e) => {
  setProfile({ ...profile, [e.target.name]: e.target.value });
};

  const UpdateProfile = async(e) =>{
    console.log("clicked")
    const res = await axios.post(`https://eduglobal.onrender.com/api/admin/updatedProfile/${user?._id}`, profile)
    console.log(res)
    console.log(res.data.message)
  }
  return (
    <div className='AdminProfile_Update'>
      <div className='AdminProfile_Update_Wrap'>
        <div className='AdminProfile_Update_SubWrap1'>
          <div className='AdminPtofile_text'>
            <h4>Please Enter a New password and Email</h4>
          </div>
          <input type="file" className='AdminUpdate' ref={inputRef} placeholder="Select Your School Logo " onChange={handleChange}/>
          <input type="text" className='AdminUpdate' ref={inputRef} placeholder="Name Of School" onChange={handleChange} />
          <input type="text" className='AdminUpdate' ref={inputRef} placeholder="Target Line" onChange={handleChange} />
          <input type="number" className='AdminUpdate' ref={inputRef} placeholder="Phone Number" onChange={handleChange} />
          <input type="text" className='AdminUpdate' ref={inputRef} placeholder="Email" onChange={handleChange} />
          <input type="text" className='AdminUpdate' ref={inputRef} placeholder="Country"onChange={handleChange} />
          <input type="text" className='AdminUpdate' ref={inputRef} placeholder="Address"onChange={handleChange} />
          <button className='AdminUpdate_Bttn' onClick={()=>{UpdateProfile()}} >Update</button>
        </div>
        <div className='AdminProfile_Update_SubWrap2'>
          <h4>Your School Profile</h4>
          <img src='./NewLogo1.png' className='AdminProfile_Logo' />
          <h4>The curve Africa</h4>
          <p>Senior secondary school</p>
          <hr className='line' />
          <div className='AdminProfileUpdate_Details'>
            <AiOutlinePhone /><p>0914356785</p>
          </div>
          <div className='AdminProfileUpdate_Details'>
            <AiOutlineMail /> <p>olaleresuliton@gmail.com</p>
          </div>
          <hr className='line' />
          <GoLocation />
          <h4>37, Arogundade Street </h4>
          <h5>Nigeria</h5>
        </div>
      </div>
    </div>
  )
}

export default AdminProfile