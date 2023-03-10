import React, { useEffect, useState } from 'react'
import "./AdminProfile.css"
import { useRef } from 'react'
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../LoadingSpin/Loading';
import { addUser } from '../../../Redux/Features';
import axios from 'axios';
const AdminProfile = () => {
  const user = useSelector((state) => state.Commerce.user)
  const dispatch = useDispatch()
  const [successMessage, setSuccessMessage] = useState(null);
  const [Load, setLoad] = useState(false);
  const [waitImage, setWaitImage] = useState(false)
  const [allAdmin, setAllAdmin] = useState([])
  const [profile, setProfile] = useState({
    nameOfSchool: "",
    phoneNumber: "",
    // email: "",
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
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const getAdmin = async (e) => {
    const res = await axios.get(`https://eduglobal.onrender.com/api/admin/Admin/${user?._id}`)
    setAllAdmin(res.data.data)
    // console.log(res.data.data.schoolImage.url)
    setWaitImage(true)
  };
  useEffect(() => {
    getAdmin()
  }, [])
  const UpdateProfile = (e) => {
    e.preventDefault();
    console.log(profile)
    const formData = new FormData();
    formData.append('nameOfSchool', profile.nameOfSchool);
    formData.append('phoneNumber', profile.phoneNumber);
    // formData.append('email', profile.email);
    formData.append('address', profile.address);
    formData.append('targetLine', profile.targetLine);
    formData.append('website', profile.website);
    formData.append('country', profile.country);
    formData.append('schoolImage', profile.schoolImage);
    console.log("clicked")
    setLoad(true)
    axios.patch(`https://eduglobal.onrender.com/api/admin/updatedProfile/${user._id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    )
      .then(function (res) {
        setLoad(false)
        setSuccessMessage(res.data.message)
        console.log(res)
        console.log(res.data.message)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'You have successfully Updated Your Profile',
          showConfirmButton: false,
          timer: 3000
        })
        res.data.data.email === value.email ? dispatch(addUser(res.data.data)) : null
      })
      .catch(function (error) {
        if (error.res) {
          console.log(error.res.data);
          console.log(error.res.status);
          console.log(error.res.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          // console.log('Error', error.message);
        }
        // console.log(error.config);
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
      name: "website",
      type: "text",
      placeholder: "Website",
      required: true
    },
  ];
  const AllAdmin ={...allAdmin}
  return (
    <div className='AdminProfile_Update'>
      <div className='AdminProfile_Update_Wrap'>
        <div className='AdminProfile_Update_SubWrap1'>
          <div className='AdminPtofile_text'>
            <h4>Update School Detail</h4>
          </div>
          <form onSubmit={UpdateProfile} className="AdminProfile_Form">
            <label className='AdminUpdate_Wrap'>
              <input
                // ref={inputRef}
                className="AdminUpdate"
                type="file"
                onChange={handleImage}
                required={true}
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
            {/* {successMessage && <p>{successMessage}</p>} */}
            <button className='AdminUpdate_Bttn' type='submit'>{Load ? <Loading /> : "Update Profile"}</button>
          </form>

        </div>
        <div className='AdminProfile_Update_SubWrap2'>
          <h4>Your School Profile</h4>
         
          <div className='AdminProfile_Logo_Div'>
            
         <img src="/UserImg.png" alt="Logo" className='AdminProfile_Logo'/>  
          </div> 
          
          <h4>{AllAdmin.nameOfSchool}</h4>
          <p>{AllAdmin.targetLine}</p>
          <hr className='line' />
          <div className='AdminProfileUpdate_Details'>
            <AiOutlinePhone /><p>{AllAdmin.phoneNumber}</p>
          </div>
          <div className='AdminProfileUpdate_Details'>
            <AiOutlineMail /> <p>{AllAdmin.email}</p>
          </div>
          <hr className='line' />
          <GoLocation />
          <h4>{AllAdmin.address}</h4>
          <h5>{AllAdmin.country}</h5>
        </div>
      </div>
    </div>
  )
}

export default AdminProfile

