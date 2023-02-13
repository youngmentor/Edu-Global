import React, { useState } from 'react'
import StudentDashLeft from './StudentDashLeft'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Routes, Route } from 'react-router-dom';
import Dashboard_Stu from '../Dashboard_Stu/Dashboard_Stu';
import Timetable_Stu from '../Timetable_Stu/Timetable_Stu';
import Report_Stu from '../Report_Stu/Report_Stu';
import AccountSetting_Stu from '../AccountSetting_Stu/AccountSetting_Stu';
import Payment from '../PayFee/Payment';
import "./StudentDash.css"
import { useNavigate } from 'react-router-dom';
const StudentsDash = () => {

    const navigate = useNavigate()
    const [toggle, setToggle] = useState(false);
    const [open, setOpen] = useState(false)

    const studentLeft_Mobile = (
        <div className='StudentLeftMobile_co'>
            {
                toggle && (
                    <div className='StudentLeftMobile_mobile' >
                        <StudentDashLeft />
                    </div>
                )
            }
        </div>
    );
    const StudentEdudrop = (
        <div className='StudentProfileWrap'>
            {open && (
                <div className='StudentProfile'>
                    <p>Account setting</p>
                    <p>Profile</p>
                    <p onClick={() => navigate("/")} >Log out</p>
                    <h5 onClick={() => navigate("/")}  >Home</h5>
                </div>
            )}
        </div>
    )
    return (
        <div className='Student_Main'>
            <div className='Student_header'>
                <div className='Student_header_wrap'>
                    <div className='StudentBurger'>
                        {toggle ? <FaTimes onClick={() => { setToggle(!toggle) }} /> : <GiHamburgerMenu onClick={() => { setToggle(!toggle) }} />}
                    </div>
                    <div className='StudentLogo'>
                        <img src="/NewLogo1.png" alt="Logo" onClick={() => navigate("/")} className="StudentHeaderLogo" />
                    </div>
                    <div className='AdminSchoolName'>
                        <div className='AdminSchoolNamewrap'>
                            <h4>Edu-Global</h4>
                            {open ? < IoIosArrowForward onClick={() => { setOpen(!open) }} /> : <IoIosArrowDown onClick={() => { setOpen(!open) }} />}
                        </div>
                        {open && StudentEdudrop}
                    </div>
                </div>
            </div>
            <div className='Student_Main_Wrap'>
                <div className='StudentLeftHolder'>
                    <StudentDashLeft />
                </div>
                {toggle && studentLeft_Mobile}
                <div className='DashboardMiddle'>
                    <Routes>
                        <Route path="/" element={<Dashboard_Stu />} />
                        <Route path="/table" element={<Timetable_Stu />} />
                        <Route path="/report" element={<Report_Stu />} />
                        <Route path="/payfee'" element={<Payment />} />
                        <Route path="/accountset" element={<AccountSetting_Stu />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default StudentsDash