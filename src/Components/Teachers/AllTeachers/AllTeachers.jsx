import React, {useState, useEffect} from 'react'
import './AllTeachers.css'
// import { NavLink } from 'react-router-dom'
import Teachers_Card from './Teachers_Card'
import { useSelector } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import axios from 'axios'
const AllTeachers = () => {
  const user = useSelector((state) => state.Commerce.user)
  const teacher = useSelector((state) => state.Commerce.teacher)
  const [AllTeacher, setAllTeacher] = useState([]);
  const [DeleteTeacher, setDeleteTeacher] = useState("")
  const getAllTeacher = async (e) => {
    const res = await axios.get(`https://eduglobal.onrender.com/api/admin/allTeacher/${user?._id}`)
    setAllTeacher(res.data.data)
    // console.log(res.data.data)
  };
  const deleteTeacher = async (id) => {
    console.log("clicked")
    // console.log(teacher?._id)
    const res = await axios.delete(`https://eduglobal.onrender.com/api/admin/deleteTeacher/${teacher?._id}/${id}`)
    
    setDeleteTeacher(res.status)
    getAllStudent()
    console.log(res)
  }
  useEffect(() => {
    getAllTeacher()

  }, [])
  useEffect(() => {
    // console.log(res)
    // console.log(Allclass)
  }, [AllTeacher, DeleteTeacher])

  return (
    <div className='AdminTeacher_All'>
     {AllTeacher?.map((i)=>(
      <Teachers_Card key={i._id} {...i} deleteTeacher={deleteTeacher} />
     ))}
      <NavLink className='AdminTeacher_All_AddWrap' to="/admin/clases/allClasses" >
        <p>+</p>
        <p>Add New</p>
      </NavLink>
    </div>
  )
}

export default AllTeachers