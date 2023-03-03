import React, {useState, useEffect} from 'react'
import './AllTeachers.css'
// import { NavLink } from 'react-router-dom'
import Teachers_Card from './Teachers_Card'
import { useSelector } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import axios from 'axios'
const AllTeachers = () => {
  const user = useSelector((state) => state.Commerce.user)
  const [AllTeacher, setAllTeacher] = useState([]);
  const [DeleteTeacher, setDeleteTeacher] = useState("")
  const getAllTeacher = async (e) => {
    const res = await axios.get(`https://eduglobal.onrender.com/api/admin/allTeacher/${user?._id}`)
    setAllTeacher(res.data.data)
    // console.log(res.data.data)
  };

  useEffect(() => {
    getAllTeacher()

  }, [])
  useEffect(() => {
    // console.log(res)
    // console.log(Allclass)
  }, [AllTeacher])

  return (
    <div className='AdminTeacher_All'>
     {AllTeacher?.map((i)=>(
      <Teachers_Card key={i._id} {...i} />
     ))}
      <NavLink className='AdminTeacher_All_AddWrap' to="/admin/clases/allClasses" >
        <p>+</p>
        <p>Add New</p>
      </NavLink>
    </div>
  )
}

export default AllTeachers