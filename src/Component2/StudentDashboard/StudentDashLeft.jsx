import React, { useState } from 'react'
// import { GiCondorEmblem } from 'react-icons/gi'
import { useNavigate, Link } from 'react-router-dom'
import { RxDashboard } from "react-icons/rx";
import { BsListTask} from "react-icons/bs";
import { HiOutlineDocumentReport} from "react-icons/hi";
import { MdOutlinePayments} from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import "./StudentDash.css"
const StudentDashLeft = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='StudentNav'>
            <Link to={"/studentdash"} className="Dash" ><h3><RxDashboard/> Dashboard</h3></Link>
            <Link to={"table"} className="Dash" ><h3> <BsListTask/> TimeTable</h3></Link>
            <Link to={"report"} className="Dash"><h3> <HiOutlineDocumentReport/>Report Card</h3></Link>
            <Link to={"payfee"} className="Dash"><h3> <MdOutlinePayments/> Pay Fee</h3></Link>
            <Link to={"accountsetStu"} className="Dash"><h3> <AiOutlineSetting/> Account Setting</h3></Link>
            <Link to={"logout"} className="Dash"> <h3> <BiLogOut/> Logout</h3></Link>
        </div>
    )
}

export default StudentDashLeft
// 