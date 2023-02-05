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
// import Timetable from '../Timetable/timetable'
import { Route, Routes } from 'react-router-dom';
const Admin = () => {
    const navigate = useNavigate()
    const [toggle, setToggle] = useState(false);
    // const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false)

    const colorObject = {
        textDecoration: 'none',
        color: 'inherit',
    }
    const activeColorObject = {
        textDecoration: 'none',
        color: 'tomato',
    }


    const AdminData = [
        // {
        //     id: 1,
        //     title: "Dashboard",
        //     icon1: < AiFillHome />,
        //     click: "/admin"

        // },
        , {
            id: 2,
            title: "Classes",
            text1: "All classes",
            text2: "New Classes",
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
            id: 3,
            title: "Subject",
            text1: "Classes with subject",
            text2: "Add new Subject",
            icon1: < RiPencilRulerLine />,
            icon2: <IoIosArrowForward />,
            icon3: <SlArrowDown />,
            click: "/admin/subject"
        }
        , {
            id: 4,
            title: "Students",
            text1: "Add new students",
            text2: "Update students",
            text3: "Delete Student",
            icon1: < FaUserFriends />,
            icon2: <IoIosArrowForward />,
            icon3: <SlArrowDown />,
            click: "/admin/student"

        },
        {
            id: 5,
            title: "Teacher",
            text1: "Add new Teacher",
            text2: "UpdateTeacher",
            text3: "Delete Teacher",
            icon1: < AiFillHome />,
            icon2: <IoIosArrowForward />,
            icon3: <SlArrowDown />,
            click: "/admin/teachers"

        },
        , {
            id: 6,
            title: "Attendance",
            text1: "Mark Student Attendance",
            text2: "Mark Teacher Attendance",
            icon1: < AiFillHome />,
            icon2: <IoIosArrowForward />,
            icon3: <SlArrowDown />,
            click: "/admin/attendance"

        }
        , {
            id: 7,
            title: "TimeTable",
            text1: "View TimeTable",
            icon1: < AiFillHome />,
            icon2: <IoIosArrowForward />,
            icon3: <SlArrowDown />,
            click: "/admin/timetable"

        }
        , {
            id: 8,
            title: "Fees",
            text1: "Pay Fees",
            icon1: < AiFillHome />,
            icon2: <IoIosArrowForward />,
            icon3: <SlArrowDown />,
            click: "/admin/fee"

        }
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
                    <h5  onClick={() => navigate("/")}  >Home</h5>
                </div>
            )}
        </div>
    )

    return (
        <div className='AdminMain'>
            <div className='Admin_header'>
              {/* <div className='Admin_header_wrap'> */}
              <div className='AdminBurger'>
                    {toggle ? <FaTimes onClick={() => { setToggle(!toggle) }} /> : <GiHamburgerMenu onClick={() => { setToggle(!toggle) }} />}
                </div>
                <div className='AdminLogo'>
                    <img src="/LOGO.png" alt="Logo" onClick={() => navigate("/")} className="AdminHeaderLogo" />
                </div>
                <div className='AdminSchoolName'>
                    <div className='AdminSchoolNamewrap'>
                        <h4>Edu-Global</h4>
                        {open ? < IoIosArrowForward onClick={() => { setOpen(!open) }} /> : <IoIosArrowDown onClick={() => { setOpen(!open) }} />}
                    </div>
                    {open && Edudrop}
                </div>
              {/* </div> */}
            </div>
            <div className='AdminMainWrap'>
                <div className='AdminLeft'>
                    <div className='AdminLeftWrap' >
                        <div onClick={() => { navigate("/admin") }} className='AdminLeftWrap_title'>< AiFillHome /><h4>Dashboard</h4></div>
                        {AdminData.map((i) => (
                            <AdminLeft key={i.id}{...i} style={({ isActive }) => isActive ? activeColorObject : colorObject} />
                        ))}
                    </div>
                </div>
                {toggle && adminLeft_Mobile}
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/clases/*" element={<Clases />} />
                        <Route path="/student" element={<Student />} />
                        <Route path="/subject" element={<Subject />} />
                        <Route path="/teachers" element={<Teachers />} />
                        {/* <Route path="/timetable" element={<Timetable />} /> */}
                        <Route path="/attendance" element={<Attendance />} />
                        <Route path="/fee" element={<Fee />} />
                    </Routes>
            </div>
        </div>
    )
}

export default Admin;
