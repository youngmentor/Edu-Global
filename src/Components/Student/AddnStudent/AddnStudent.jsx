import React, {useState, useEffect} from 'react'
import './AddnStudent.css'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
const AddnStudent = () => {
  // const navigate = useNavigate()
  const [students, setStudents] = useState([]);



  useEffect(() => {
    axios.get('https://eduglobal.onrender.com/api/admin/allStudent/63e5d1cf1757b316d1dea558')
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className='AdminStudents_All'>
      <div className='AdminStudents_All_Wrap'>
       <div className='AdminStudent_Img'> 
       <img src="/UserImg.png" alt="StudentLogo" className='AdminStudent_Avatar' />
       </div>
      {
        students.map((student)=>(
          <div className='AdminStudent_Details'>
          <p>{student.regNumber}</p>
          <p>{student.studentName}</p>
         </div>
        ))
      }
      </div>
      {/* <div className='AdminStudents_All_Wrap'>
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
      </div> */}
      <NavLink className='AdminStudents_All_AddWrap' to="/admin/student/updatestudents" >
           <p>+</p>
           <p>Add New</p>
      </NavLink>
    </div>
  )
}

export default AddnStudent