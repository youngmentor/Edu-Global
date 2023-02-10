import React from 'react'
import './AddnStudent.css'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
const AddnStudent = () => {
  const navigate = useNavigate()
  return (
    <div className='AdminStudents_All'>
      <div className='AdminStudents_All_Wrap'>
       <div className='AdminStudent_Img'> 
       <img src="/UserImg.png" alt="StudentLogo" className='AdminStudent_Avatar' />
       </div>
       <div className='AdminStudent_Details'>
        <p>111009</p>
        <p>suliton</p>
       </div>
      </div>
      <div className='AdminStudents_All_Wrap'>
       <div className='AdminStudent_Img'> 
       <img src="/UserImg.png" alt="StudentLogo" className='AdminStudent_Avatar' />
       </div>
       <div className='AdminStudent_Details'>
        <p>111009</p>
        <p>suliton</p>
       </div>
      </div>
      <div className='AdminStudents_All_Wrap'>
       <div className='AdminStudent_Img'> 
       <img src="/UserImg.png" alt="StudentLogo" className='AdminStudent_Avatar' />
       </div>
       <div className='AdminStudent_Details'>
        <p>111009</p>
        <p>suliton</p>
       </div>
      </div>
      <div className='AdminStudents_All_Wrap'>
       <div className='AdminStudent_Img'> 
       <img src="/UserImg.png" alt="StudentLogo" className='AdminStudent_Avatar' />
       </div>
       <div className='AdminStudent_Details'>
        <p>111009</p>
        <p>suliton</p>
       </div>
      </div>
      <NavLink className='AdminStudents_All_AddWrap' to="/admin/student/updatestudents" >
           <p>+</p>
           <p>Add New</p>
      </NavLink>
    </div>
  )
}

export default AddnStudent