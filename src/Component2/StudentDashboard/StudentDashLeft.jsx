import React, { useState } from 'react'
// import { GiCondorEmblem } from 'react-icons/gi'
import { useNavigate, NavLink } from 'react-router-dom'
import { RxDashboard } from "react-icons/rx";
import { BsListTask} from "react-icons/bs";
import { HiOutlineDocumentReport} from "react-icons/hi";
import { MdOutlinePayments} from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { clearStudent } from '../../Redux/Features';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import "./StudentDash.css"
const StudentDashLeft = () => {
    const navigate= useNavigate()
  const dispatch= useDispatch()
const student = useSelector((state) => state.Commerce.student)

const colorObject = {
  textDecoration: 'none',
  color: 'inherit',
}
const activeColorObject = {
  textDecoration: 'none',
  color: 'blue',
}

  const logOut = async () => {
    console.log("clicked")
    const res = await axios.post(`https://eduglobal.onrender.com/api/student/logout/${student?._id}`)
    console.log(res.data)
    res.status === 200 ? dispatch(clearStudent()) : null
    res.status === 200 ? navigate('/loginuser/login') : null
}
    // 
    const [toggle, setToggle] = useState(false)
    return (
        <div className='StudentNav'>
            <NavLink to={"/studentdash"} className="Dash" style={({ isActive }) => isActive ? activeColorObject : colorObject}  ><h3><RxDashboard/> Dashboard</h3></NavLink>
            {/* <Link to={"table"} className="Dash" ><h3> <BsListTask/> TimeTable</h3></Link> */}
            <NavLink to={"report"} className="Dash"><h3> <HiOutlineDocumentReport/>Report Card</h3></NavLink>
            <NavLink to={"payfee"} className="Dash"><h3> <MdOutlinePayments/> Pay Fee</h3></NavLink>
            <NavLink to={"accountsetStu"} className="Dash"><h3> <AiOutlineSetting/> Account Setting</h3></NavLink>
            <NavLink to={"logout"} className="Dash"> <h3 onClick={() => { logOut() }} > <BiLogOut/> Logout</h3></NavLink>
        </div>
    )
}

export default StudentDashLeft
// 