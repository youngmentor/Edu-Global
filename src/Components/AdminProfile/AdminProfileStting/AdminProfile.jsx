import React, { useEffect, useState } from 'react'
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
  })

  const handleImage = (event) => {
    const file = event.target.files[0];
    setProfile({ ...profile, schoolImage: file });
  };
  // const inputRef = useRef()
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const UpdateProfile = (e) => {
    e.preventDefault();
    console.log(profile)
    const formData = new FormData();
    formData.append('nameOfSchool', profile.nameOfSchool);
    formData.append('phoneNumber', profile.phoneNumber);
    formData.append('address', profile.address);
    formData.append('targetLine', profile.targetLine);
    formData.append('website', profile.website);
    formData.append('country', profile.country);
    formData.append('schoolImage', profile.schoolImage);
    console.log("clicked")
    
    axios.patch(`https://eduglobal.onrender.com/api/admin/updatedProfile/${user?._id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    )
      .then(function (res) {
        console.log(res)
        console.log(res.data.message)
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  }
  const Profile = [
    {
      id: 1,
      name: "nameOfSchool",
      type: "text",
      placeholder: "Name Of School",
      required: true
    },
    {
      id: 2,
      name: "targetLine",
      type: "text",
      placeholder: "Target line ",
      required: true
    },
    {
      id: 3,
      name: "phoneNumber",
      type: "number",
      placeholder: "Phone Number",
      required: true
    },
    {
      id: 4,
      name: "address",
      type: "text",
      placeholder: "School Address",
      required: true
    },
    {
      id: 5,
      name: "country",
      type: "text",
      placeholder: " Country",
      required: true
    },
    {
      id: 6,
      name: "website",
      type: "text",
      placeholder: "Website",
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
          <label  className='AdminUpdate_Wrap'>
                <input
                  // ref={inputRef}
                  className="AdminUpdate"
                  type="file" 
                  onChange={handleImage}
                  required = {true}
                />
              </label>
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

