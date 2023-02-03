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
import Timetable from '../Timetable/timetable'
import { ThemeContext } from '../ContextApi/Context'

const Admin = () => {
    const navigate = useNavigate()
    const { s_dashboard, S_Dashboard, s_classes, S_Classes,
        s_attendance, S_Attendance, s_subject, S_Subject, s_student, S_Student,
        s_teacher, S_Teacher, s_timetable, S_Timetable, s_fee, S_Fee } = useContext(ThemeContext)

    const [toggle, setToggle] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
        setIsOpen(!isOpen)
    };

    const AdminData = [
        {
            id: 1,
            title: "Dashboard",
            icon1: < AiFillHome />,
            click: S_Dashboard
        },
        , {
            id: 2,
            title: "Classes",
            text1: "All classes",
            text2: "New Classes",
            text2: "Edit or Delete",
            icon1: < AiFillHome />,
            icon2: <IoIosArrowForward />,
            value: false,
            icon3: <SlArrowDown />,
            click: S_Classes
        }
        , {
            id: 3,
            title: "Subject",
            text1: "Classes with subject",
            text2: "Add new Subject",
            icon1: < RiPencilRulerLine />,
            icon2: <IoIosArrowForward />,
            icon3: <SlArrowDown />,
            click: S_Subject
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
            click: S_Student
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
            click: S_Teacher
        },
        , {
            id: 6,
            title: "Attendance",
            text1: "Mark Student Attendance",
            text2: "Mark Teacher Attendance",
            icon1: < AiFillHome />,
            icon2: <IoIosArrowForward />,
            icon3: <SlArrowDown />,
            click: S_Attendance
        }
        , {
            id: 7,
            title: "TimeTable",
            text1: "View TimeTable",
            icon1: < AiFillHome />,
            icon2: <IoIosArrowForward />,
            icon3: <SlArrowDown />,
            click: S_Timetable
        }
        , {
            id: 8,
            title: "Fees",
            text1: "Pay Fees",
            icon1: < AiFillHome />,
            icon2: <IoIosArrowForward />,
            icon3: <SlArrowDown />,
            click: S_Fee
        }
    ]

    return (
        <div className='AdminMain'>
            <div className='AdminHeader'>
                <div className='AdminHeaderWrap' >
                    <div className='AdminBurger'>
                        {toggle ? <GiHamburgerMenu onClick={handleToggle} /> : <FaTimes onClick={handleToggle} />}
                    </div>
                    <div className='AdminLogo'>
                        <img src="/LOGO.png" alt="Logo" onClick={() => navigate("/")} className="HeaderLogo" />
                    </div>
                    <div className='AdminSchoolName'>
                        <div className='AdminSchoolNamewrap'>
                            <h4>Edu-Global</h4>
                            {open ? < IoIosArrowForward onClick={() => { setOpen(!open) }} /> : <IoIosArrowDown onClick={() => { setOpen(!open) }} />}
                        </div>
                        <div className='AdminProfileWrap'>
                            {open && (
                                <div className='AdminProfile'>
                                    <p>Account setting</p>
                                    <p>Profile</p>
                                    <p>Log out</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className='AdminMain_wrap'>
                <div className='AdminLeft'>
                    <div className='AdminLeftinvisibleWrap'>
                        {
                            isOpen && (
                                <div className='AdminLeftinvisible' >
                                    {AdminData.map((i) => (
                                        <AdminLeft key={i.id}{...i} />
                                    ))}
                                </div>
                            )
                        }
                    </div>
                    <div className='AdminLeftWrap' >
                        {AdminData.map((i) => (
                            <AdminLeft key={i.id}{...i} />
                        ))}
                    </div>
                </div>
                {s_dashboard && <Dashboard />}
                {s_classes && <Clases />}
                {s_attendance && <Attendance />}
                {s_subject && <Subject />}
                {s_student && <Student />}
                {s_teacher && <Teachers />}
                {s_timetable && < Timetable />}
                {s_fee && <Fee />}
            </div>
        </div>
    )
}

export default Admin;