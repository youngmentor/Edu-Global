import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { BsListTask} from "react-icons/bs";
import { HiOutlineDocumentReport} from "react-icons/hi";
import { MdEventAvailable} from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { Link } from 'react-router-dom';
const TeacherDashbLeft = () => {
  return (
    <div className='TeacherNav'>
          <Link to={"/teacherdash"} className="Dash" ><h3><RxDashboard/> Dashboard</h3></Link>
            <Link to={"tableteacher"} className="Dash" ><h3> <BsListTask/> TimeTable</h3></Link>
            <Link to={"allstudentteacher"} className="Dash"><h3> <HiOutlineDocumentReport/>All Student</h3></Link>
            <Link to={"attendanceteacher"} className="Dash"><h3> <MdEventAvailable/> Attendance</h3></Link>
            <Link to={"accountsetteacher"} className="Dash"><h3> <AiOutlineSetting/> Account Setting</h3></Link>
            <Link to={"logout"} className="Dash"> <h3> <BiLogOut/> Logout</h3></Link>
    </div>
  )
}

export default TeacherDashbLeft