import React from 'react'
import "./TeacherDashb.css"
import ReportCard_Stu from '../ReportCard_Stu/ReportCard_Stu'
import Attendance_Stu from '../Attendance_Stu/Attendance_Teach'
import AccountSetting_Teach from '../AccountSetting_Teach/AccountSetting_Teach'
import TimeTable_Teach from '../TimeTable_Teach/TimeTable_Teach'
import DashBoard__Teacher from '../DashBoard__Teacher/DashBoard__Teacher'
const Teachers_Dashb = () => {
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
                        <Route path="/" element={<DashBoard__Teacher/>} />
                        <Route path="/table" element={<TimeTable_Teach />} />
                        <Route path="/report" element={<ReportCard_Stu  />} />
                        <Route path="/payfee'" element={<Attendance_Stu/>} />
                        <Route path="/accountset" element={<AccountSetting_Teach/>} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Teachers_Dashb