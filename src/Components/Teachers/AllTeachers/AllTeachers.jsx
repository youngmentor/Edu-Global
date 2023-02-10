import React from 'react'
import './AllTeachers.css'
const AllTeachers = () => {
  return (
    <div className='AdminTeacher_All'>
         <div className='AdminTeachers_All_Wrap'>
       <div className='AdminTeachers_Img'> 
       <img src="/UserImg.png" alt="TeacherLogo" className='AdminTeacher_Avatar' />
       </div>
       <div className='AdminTeacher_Details'>
        <p>1</p>
        <p>Anthony</p>
       </div>
      </div>
      <NavLink className='AdminStudents_All_AddWrap' to="/admin/student/updatestudents" >
           <p>+</p>
           <p>Add New</p>
      </NavLink>
    </div>
  )
}

export default AllTeachers