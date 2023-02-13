import React, { useState } from 'react'
// import { GiCondorEmblem } from 'react-icons/gi'
import { useNavigate, Link } from 'react-router-dom'
import "./StudentDash.css"
const StudentDashLeft = () => {
    const navigate = useNavigate()
    const [toggle, setToggle] = useState(false)
    return (
        <div className='StudentNav'>
            <Link to={"/studentdash"} className="Dash" ><h3>Dashboard</h3></Link>
            <Link to={"table"} className="Dash" ><h3>TimeTable</h3></Link>
            <Link to={"report"} className="Dash"><h3>Report Card</h3></Link>
            <Link to={"payfee"} className="Dash"><h3>Pay Fee</h3></Link>
            <Link to={"accountset"} className="Dash"><h3>Account Setting</h3></Link>
            <h3>Logout</h3>
        </div>
    )
}

export default StudentDashLeft
// 