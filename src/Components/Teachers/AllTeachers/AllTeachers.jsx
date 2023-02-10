import React from 'react'
import './AllTeachers.css'
import { NavLink } from 'react-router-dom'
const AllTeachers = () => {
  return (
    <div className='AdminTeacher_All'>
      <div className='AdminTeachers_All_Wrap'>
        <div className='AdminTeachers_Img'>
          <img src="/UserImg.png" alt="TeacherLogo" className='AdminTeacher_Avatar' />
        </div>
        <div className='AdminTeacher_Details'>
          <p>Anthony</p>
        </div>
      </div>
      <div className='AdminTeachers_All_Wrap'>
        <div className='AdminTeachers_Img'>
          <img src="/UserImg.png" alt="TeacherLogo" className='AdminTeacher_Avatar' />
        </div>
        <div className='AdminTeacher_Details'>
          <p>Favour</p>
        </div>
      </div>
      <div className='AdminTeachers_All_Wrap'>
        <div className='AdminTeachers_Img'>
          <img src="/UserImg.png" alt="TeacherLogo" className='AdminTeacher_Avatar' />
        </div>
        <div className='AdminTeacher_Details'>
          <p>Edidiong</p>
        </div>
      </div>
      <NavLink className='AdminTeacher_All_AddWrap' to="/admin/teachers/addteacher" >
        <p>+</p>
        <p>Add New</p>
      </NavLink>
    </div>
  )
}

export default AllTeachers