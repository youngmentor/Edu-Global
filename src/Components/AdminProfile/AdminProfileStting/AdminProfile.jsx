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
  // const inputRef = useRef()
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const UpdateProfile = async (e) => {
    console.log("clicked")
    e.preventDefault();
    const res = await axios.put(`https://eduglobal.onrender.com/api/admin/updatedProfile/${user?._id}`, profile)
      .then(function (res) {
        console.log(res)
        console.log(res.data.message)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const Profile = [
    {
      id: 1,
      name: "schoolImage",
      type: "file",
      placeholder: "Select Your School Logo ",
      required: true
    },
    {
      id: 2,
      name: "nameOfSchool",
      type: "text",
      placeholder: "Name Of School",
      required: true
    },
    {
      id: 3,
      name: "targetLine",
      type: "text",
      placeholder: "Target line ",
      required: true
    },
    {
      id: 4,
      name: "phoneNumber",
      type: "number",
      placeholder: "Phone Number",
      required: true
    },
    {
      id: 5,
      name: "address",
      type: "text",
      placeholder: "School Address",
      required: true
    },
    {
      id: 6,
      name: "country",
      type: "text",
      placeholder: " Country",
      required: true
    },
    {
      id: 7,
      name: "email",
      type: "text",
      placeholder: "Input Email ",
      required: true
    },
  ]
  return (
    <div className='AdminProfile_Update'>
      <div className='AdminProfile_Update_Wrap'>
        <div className='AdminProfile_Update_SubWrap1'>
          <div className='AdminPtofile_text'>
            <h4>Please Enter a New password and Email</h4>
          </div>
          <form onSubmit={UpdateProfile} className="AdminProfile_Form">
            {Profile.map((i) => (
              <label key={i.name} className='AdminUpdate_Wrap'>
                <input
                  // ref={inputRef}
                  className="AdminUpdate"
                  type={i.type}
                  name={i.name}
                  placeholder={i.placeholder}
                  onChange={handleChange}
                  required={i.required}
                />
              </label>
            ))}
            <button className='AdminUpdate_Bttn' type='submit'>Update</button>
          </form>

        </div>
        <div className='AdminProfile_Update_SubWrap2'>
          <h4>Your School Profile</h4>
          <div className='AdminProfile_Logo_Div'><img src='./NewLogo1.png' className='AdminProfile_Logo' /></div>
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

{/* <input type="file" className='AdminUpdate' ref={inputRef} placeholder="Select Your School Logo " onChange={handleChange}/>
          <input type="text" className='AdminUpdate' ref={inputRef} placeholder="Name Of School" onChange={handleChange} />
          <input type="text" className='AdminUpdate' ref={inputRef} placeholder="Target Line" onChange={handleChange} />
          <input type="number" className='AdminUpdate' ref={inputRef} placeholder="Phone Number" onChange={handleChange} />
          <input type="text" className='AdminUpdate' ref={inputRef} placeholder="Email" onChange={handleChange} />
          <input type="text" className='AdminUpdate' ref={inputRef} placeholder="Country"onChange={handleChange} />
          <input type="text" className='AdminUpdate' ref={inputRef} placeholder="Address"onChange={handleChange} /> */}