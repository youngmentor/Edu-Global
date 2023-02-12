import React, { useState } from 'react'
// import { GiCondorEmblem } from 'react-icons/gi'
import { useNavigate, Link } from 'react-router-dom'
import "./StudentDash.css"
const StudentDashLeft = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='StudentNav'>
            <h3>Dashboard</h3>
            <h3>TimeTable</h3>
            <h3>Report Card</h3>
            <h3>Pay Fee</h3>
            <h3>Account Setting</h3>
            <h3>Logout</h3>
        </div>
    )
}

export default StudentDashLeft