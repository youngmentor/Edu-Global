import React, { useState, useEffect } from 'react'
import './AddnStudent.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Student_Card from './Student_Card';
// import { addStudent } from '../../../Redux/Features'

const AddnStudent = () => {
  // const navigate = useNavigate()
  const { id } = useParams()
  const user = useSelector((state) => state.Commerce.user)
  const [Allstudents, setAllStudents] = useState([]);
  const [DeleteStudent, setDeleteStudent] = useState("")
  const addStudent = useSelector((state) => state.Commerce.addStudent)
  const getAllStudent = async (e) => {
    const res = await axios.get(`https://eduglobal.onrender.com/api/admin/allStudent/${user?._id}`)
    setAllStudents(res.data.data)
    // console.log(res.data.data)
  };

  
  const deleteStudent = async (id) => {
    console.log("clicked", id)
    const res = await axios.delete(`https://edusms.onrender.com/api/admin/deleteStudent/${user?._id}/${id}`)
    setDeleteStudent(res.status)
    getAllStudent()
    console.log(res)
  }
  useEffect(() => {
    getAllStudent()

  }, [])
  useEffect(() => {
    // console.log(res)
    // console.log(Allclass)
  }, [Allstudents, DeleteStudent])
  return (
    <div className='AdminStudents_All'>
      {Allstudents?.map((i) => (
        <Student_Card key={i._id} {...i}  deleteStudent={ deleteStudent} status={DeleteStudent} />
      ))}

      <NavLink className='AdminStudents_All_AddWrap' to="/admin/clases/allClasses" >
        <p>+</p>
        <p>Add New</p>
      </NavLink>
    </div>
  )
}

export default AddnStudent