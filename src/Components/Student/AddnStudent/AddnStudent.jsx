import React, { useState, useEffect } from 'react'
import './AddnStudent.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { addStudent } from '../../../Redux/Features'
const AddnStudent = () => {
  // const navigate = useNavigate()
  const user = useSelector((state) => state.Commerce.user)
  const [Allstudents, setAllStudents] = useState([]);
  const allclass = useSelector((state) => state.Commerce.allclass)
  const getAllStudent = async (e) => {
    const res = await axios.get(`https://eduglobal.onrender.com/api/admin/allStudent/${user?._id}`)
    setAllStudents(res.data.data)
    // console.log(res.data.data)
  }
  useEffect(() => {
    getAllStudent()

  }, [])
  useEffect(() => {
    // console.log(res)
    // console.log(Allclass)
  }, [Allstudents])
  return (
    <div className='AdminStudents_All'>
      {Allstudents?.map((i) => (
        <div className='AdminStudents_All_Wrap'>
          <div className='AdminStudent_Img'>
            <img src="/UserImg.png" alt="StudentLogo" className='AdminStudent_Avatar' />
          </div>
          <div className='AdminAllStudent_Details'>
            <p>{i.studentName}</p>
            <p>{i.regNumber}</p>
            {/* <p>{i._id}</p> */}
          </div>
        </div>
      ))}

      <NavLink className='AdminStudents_All_AddWrap' to="/admin/student/updatestudents" >
        <p>+</p>
        <p>Add New</p>
      </NavLink>
    </div>
  )
}

export default AddnStudent