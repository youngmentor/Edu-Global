import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { BsListTask} from "react-icons/bs";
import { HiOutlineDocumentReport} from "react-icons/hi";
import { MdOutlinePayments} from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { Link } from 'react-router-dom';
const TeacherDashbLeft = () => {
  return (
    <div className='TeacherNav'>
          <Link to={"/studentdash"} className="Dash" ><h3><RxDashboard/> Dashboard</h3></Link>
            <Link to={"table"} className="Dash" ><h3> <BsListTask/> TimeTable</h3></Link>
            <Link to={"report"} className="Dash"><h3> <HiOutlineDocumentReport/>Report Card</h3></Link>
            <Link to={"payfee"} className="Dash"><h3> <MdOutlinePayments/> Pay Fee</h3></Link>
            <Link to={"accountset"} className="Dash"><h3> <AiOutlineSetting/> Account Setting</h3></Link>
            <Link to={"logout"} className="Dash"> <h3> <BiLogOut/> Logout</h3></Link>
    </div>
  )
}

export default TeacherDashbLeft