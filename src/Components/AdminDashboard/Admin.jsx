import React, { useState, useContext } from 'react'
import './Admin.css'
import AdminLeft from './AdminLeft'
// import { AdminData } from './AdminData'
import 'react-calendar/dist/Calendar.css';
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'
import { IoIosArrowDown } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { RiPencilRulerLine } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import Clases from '../Clases/Classes'
import Attendance from '../Attendance/Attendance';
import Fee from '../Fee/Fee';
import Subject from '../Subject/Subject'
import Student from '../Student/Student'
import Teachers from '../Teachers/Teachers'
import Timetable_Admin from '../Timetable_Admin/Timetable_Admin';
import { Route, Routes } from 'react-router-dom';
const Admin = () => {
    const navigate = useNavigate()
    const [toggle, setToggle] = useState(false);
    const [open, setOpen] = useState(false)

    const AdminData = [
         {
            id: 1,
            title: "Classes",
            text1: "All classes",
            text2: "Add New Classes",
            text3: "Edit or Delete",
            icon1: < AiFillHome />,
            icon2: <IoIosArrowForward />,
            value: false,
            icon3: <SlArrowDown />,
            click: "/admin/clases",
            click1: "/admin/clases/allClasses",
            click2: "/admin/clases/addclasses",
            click3: "/admin/clases/editclasses",
        }
        , {
            id: 2,
            title: "Subject",
            text1: "Classes With Subject",
            text2: "Add New Subject",
            icon1: < RiPencilRulerLine />,
            icon2: <IoIosArrowForward />,
            icon3: <SlArrowDown />,
            click: "/admin/subject",
            click1: "/admin/subject/classeswsubject",
            click2: "/admin/subject/addnsubject",
           
        }
        , {
            id: 3,
            title: "Students",
            text1: "All students",
            text2: "Add student",
            icon1: < FaUserFriends />,
            icon2: <IoIosArrowForward />,
            icon3: <SlArrowDown />,
            click: "/admin/student",
            click1: "/admin/student/addnstudents",
            click2: "/admin/student/updatestudents",
        },
        {
            id: 4,
            title: "Teacher",
            text1: "All Teachers",
            text2: "Add Teacher",
            icon1: < AiFillHome />,
            icon2: <IoIosArrowForward />,
            icon3: <SlArrowDown />,
            click: "/admin/teachers",
            click1: "/admin/teachers/allteacher",
            click2: "/admin/teachers/addteacher",

        },
        , {
            id: 5,
            title: "Attendance",
            // text1: "Mark Student Attendance",
            text2: "Teacher Attendance",
            icon1: < AiFillHome />,
            icon2: <IoIosArrowForward />,
            icon3: <SlArrowDown />,
            click: "/admin/attendance",
            // click1: "/admin/attendance/studentattendance",
            click2: "/admin/attendance/teacherattendance",
        }
        , {
            id: 6,
            title: "TimeTable",
            text1: "View TimeTable",
            icon1: < AiFillHome />,
            icon2: <IoIosArrowForward />,
            icon3: <SlArrowDown />,
            click: "/admin/timetable",
            click1: "/admin/timetable"


        }
        , {
            id: 7,
            title: "Fees",
            text1: "Pay Fees",
            icon1: < AiFillHome />,
            icon2: <IoIosArrowForward />,
            icon3: <SlArrowDown />,
            click: "/admin/fee"

        },
    ]
    const adminLeft_Mobile = (
        <div className='AdminLeftMobile_co'>
            {
                toggle && (
                    <div className='AdminLeftMobile_mobile' >
                        <div onClick={() => { navigate("/admin") }} className='AdminLeftWrap_title'>< AiFillHome /><h4>Dashboard</h4></div>
                        {AdminData.map((i) => (
                            <AdminLeft key={i.id}{...i} style={({ isActive }) => isActive ? activeColorObject : colorObject} />
                        ))}
                    </div>
                )
            }
        </div>
    );
    const Edudrop = (
        <div className='AdminProfileWrap'>
            {open && (
                <div className='AdminProfile'>
                    <p>Account setting</p>
                    <p>Profile</p>
                    <p onClick={() => navigate("/")} >Log out</p>
                    <h5 onClick={() => navigate("/")}  >Home</h5>
                </div>
            )}
        </div>
    )

    return (
        <div className='AdminMain'>
            <div className='Admin_header'>
                <div className='Admin_header_wrap'>
                <div className='AdminBurger'>
                    {toggle ? <FaTimes onClick={() => { setToggle(!toggle) }} /> : <GiHamburgerMenu onClick={() => { setToggle(!toggle) }} />}
                </div>
                <div className='AdminLogo'>
                    <img src="/NewLogo1.png" alt="Logo" onClick={() => navigate("/")} className="AdminHeaderLogo" />
                </div>
                <div className='AdminSchoolName'>
                    <div className='AdminSchoolNamewrap'>
                        <div className='ActiveUser'></div>
                        <h4>Edu-Global</h4>
                        {open ? < IoIosArrowForward onClick={() => { setOpen(!open) }} /> : <IoIosArrowDown onClick={() => { setOpen(!open) }} />}
                    </div>
                    {open && Edudrop}
                </div>
                </div>
            </div>
            <div className='AdminMainWrap'>
                <div className='AdminMainWraps'>
                    <div className='AdminLeft'>
                        <div className='AdminLeftWrap' >
                            <div onClick={() => { navigate("/admin") }} className='AdminLeftWrap_title'><h4>Dashboard</h4></div>
                            <div className='AdminLeftHolder'>
                                {AdminData.map((i) => (
                                    <AdminLeft key={i.id}{...i} />
                                ))}
                            </div>
                        </div>
                    </div>
                    {toggle && adminLeft_Mobile}
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/clases/*" element={<Clases />} />
                        <Route path="/student/*" element={<Student />} />
                        <Route path="/subject/*" element={<Subject />} />
                        <Route path="/teachers/*" element={<Teachers />} />
                        <Route path="/timetable" element={<Timetable_Admin />} />
                        <Route path="/attendance/*" element={<Attendance />} />
                        <Route path="/fee" element={<Fee />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Admin;
