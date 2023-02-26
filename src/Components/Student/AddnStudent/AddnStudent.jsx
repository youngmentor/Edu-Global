import React, {useState, useEffect} from 'react'
import './AddnStudent.css'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { addStudent } from '../../../Redux/Features'
const AddnStudent = () => {
  // const navigate = useNavigate()
  const [students, setStudents] = useState([]);


  return (
    <div className='AdminStudents_All'>
      <div className='AdminStudents_All_Wrap'>
       <div className='AdminStudent_Img'> 
       <img src="/UserImg.png" alt="StudentLogo" className='AdminStudent_Avatar' />
       </div>
          <div className='AdminStudent_Details'>
          <p>sulito</p>
          <p>001</p>
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