import React, { useState } from 'react'
import "./TeacherDashb.css"
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Routes, Route } from 'react-router-dom';
import TeacherDashbLeft from './TeacherDashbLeft'
import All_Students from '../AllStudents/All_Students';
import Attendance_Teach from '../Attendance_Teach/Attendance_Teach';
import AccountSetting_Teach from '../AccountSetting_Teach/AccountSetting_Teach'
import TimeTable_Teach from '../TimeTable_Teach/TimeTable_Teach'
import DashBoard__Teacher from '../DashBoard__Teacher/DashBoard__Teacher'
import { useNavigate } from 'react-router-dom';
const Teachers_Dashb = () => {
    const navigate = useNavigate()
    const [toggle, setToggle] = useState(false);
    const [open, setOpen] = useState(false)

    const TeacherLeft_Mobile = (
        <div className='TeacherLeftMobile_co'>
            {
                toggle && (
                    <div className='TeacherLeftMobile_mobile' >
                        <TeacherDashbLeft />
                    </div>
                )
            }
        </div>
    );
    const TeacherEdudrop = (
        <div className='TeacherProfileWrap'>
            {open && (
                <div className='TeacherProfile'>
                    <p>Account setting</p>
                    <p>Profile</p>
                    <p onClick={() => navigate("/")} >Log out</p>
                    <h5 onClick={() => navigate("/")}  >Home</h5>
                </div>
            )}
        </div>
    )
    return (
        <div className='Teacher_Main'>
            <div className='Teacher_header'>
                <div className='Teacher_header_wrap'>
                    <div className='TeacherBurger'>
                        {toggle ? <FaTimes onClick={() => { setToggle(!toggle) }} /> : <GiHamburgerMenu onClick={() => { setToggle(!toggle) }} />}
                    </div>
                    <div className='TeacherLogo'>
                        <img src="/NewLogo1.png" alt="Logo" onClick={() => navigate("/")} className="TeacherHeaderLogo" />
                    </div>
                    <div className='AdminSchoolName'>
                        <div className='AdminSchoolNamewrap'>
                            <h4>Edu-Global</h4>
                            {open ? < IoIosArrowForward onClick={() => { setOpen(!open) }} /> : <IoIosArrowDown onClick={() => { setOpen(!open) }} />}
                        </div>
                        {open && TeacherEdudrop }
                    </div>
                </div>
            </div>
            <div className='Teacher_Main_Wrap'>
                <div className='TeacherLeftHolder'>
                    <TeacherDashbLeft />
                </div>
                {toggle && TeacherLeft_Mobile }
                <div className='TeacherDashboardMiddle'>
                    <Routes>
                        <Route path="/" element={<DashBoard__Teacher/>} />
                        <Route path="/tableteacher" element={<TimeTable_Teach />} />
                        <Route path="/allstudentteacher" element={<All_Students  />} />
                        <Route path="/attendanceteacher" element={<Attendance_Teach/>} />
                        <Route path="/accountsetteacher" element={<AccountSetting_Teach/>} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Teachers_Dashb