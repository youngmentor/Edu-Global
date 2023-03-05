import React from 'react'
import { RxDashboard } from "react-icons/rx";
// import { BsListTask } from "react-icons/bs";
import { HiOutlineDocumentReport } from "react-icons/hi";
// import { MdEventAvailable } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { clearTeacher } from '../../Redux/Features';
const TeacherDashbLeft = () => {
  const navigate= useNavigate()
  const dispatch= useDispatch()
  const teacher = useSelector((state) => state.Commerce.teacher)
  const logOut = async () => {
    console.log("clicked")
    const res = await axios.post(`https://eduglobal.onrender.com/api/teacher/logout/${teacher?._id}`)
    console.log(res.data)
    res.status === 200 ? dispatch(clearTeacher()) : null
    res.status === 200 ? navigate('/loginuser/login') : null
}
  return (
    <div className='TeacherNav'>
      <Link to={"/teacherdash"} className="Dash" ><h3><RxDashboard /> Dashboard</h3></Link>
      {/* <Link to={"tableteacher"} className="Dash" ><h3> <BsListTask /> TimeTable</h3></Link> */}
      <Link to={"allstudentteacher"} className="Dash"><h3> <HiOutlineDocumentReport />All Student</h3></Link>
      {/* <Link to={"attendanceteacher"} className="Dash"><h3> <MdEventAvailable /> Attendance</h3></Link> */}
      <Link to={"accountsetteach"} className="Dash"><h3> <AiOutlineSetting /> Account Setting</h3></Link>
    <div className="Dash" >  <h3 onClick={() => { logOut() }}> <BiLogOut /> Logout</h3></div>
    </div>
  )
}

export default TeacherDashbLeft