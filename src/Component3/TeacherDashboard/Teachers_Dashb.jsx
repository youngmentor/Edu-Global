import React, { useState, useEffect } from 'react'
import "./TeacherDashb.css"
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineSetting } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { Routes, Route } from 'react-router-dom';
import TeacherDashbLeft from './TeacherDashbLeft'
import All_Students from '../AllStudents/All_Students';
import Attendance_Teach from '../Attendance_Teach/Attendance_Teach';
import AccountSetting_Teach from '../AccountSetting_Teach/AccountSetting_Teach'
import TimeTable_Teach from '../TimeTable_Teach/TimeTable_Teach'
import DashBoard__Teacher from '../DashBoard__Teacher/DashBoard__Teacher'
import { useNavigate, Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearTeacher } from '../../Redux/Features';
import axios from 'axios';
const Teachers_Dashb = () => {
    const teacher = useSelector((state) => state.Commerce.teacher)
    const navigate = useNavigate()
    const [toggle, setToggle] = useState(false);
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [oneteacher, setOneTeacher] = useState()

    const colorObject = {
        textDecoration: 'none',
        color: 'inherit',
    }
    const activeColorObject = {
        textDecoration: 'none',
        color: 'blue',
    }

    const getTeacher = () => {

        axios.get(`https://eduglobal.onrender.com/api/admin/Teacher/${teacher[0]?._id}`)

            .then(res => {
                setOneTeacher(res.data.data)
            }
            )
    }
    useEffect(() => {
        getTeacher()

    }, [])
    const oneteacherdata = { ...oneteacher }
    const dispatch = useDispatch()
    const logOut = async () => {
        console.log("clicked")
        const res = await axios.post(`https://eduglobal.onrender.com/api/teacher/logout/${teacher[0]?._id}`)
        console.log(res.data)
        res.status === 200 ? dispatch(clearTeacher()) : null
        res.status === 200 ? navigate('/loginuser/login') : null
    }

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
                    <NavLink to="accountsetteach" className="StudentSetting" style={({ isActive }) => isActive ? activeColorObject : colorObject}> <AiOutlineSetting /> <p>Account setting</p></NavLink>
                    <NavLink className="StudentSetting" to="/">
                        <AiFillHome /><h5>Home</h5>
                    </NavLink>
                    <div className="StudentSetting">
                   <BiLogOut />
                     <p  onClick={() => { logOut() }} >Log out</p>
                   </div>
                </div>
            )}
        </div>
    )
    const TeacherEdudrop2 = (
        <div className='TeacherProfileWrap'>
            {open2 && (
                <div className='TeacherProfile'>
                    {/* <Link to={"accountsetteach"} className="AccountsettingLink"><p>Account setting</p></Link> */}
                    <Link to={"/loginuser/login"} className="AccountsettingLink"><p>Login</p></Link>
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
                    <div>
                        {oneteacher ? <div className='AdminSchoolName'>
                            <div className='AdminSchoolNamewrap1'>
                                <h4>{oneteacherdata.teacherName}</h4>
                                {open ? < IoIosArrowForward onClick={() => { setOpen(!open) }} /> : <IoIosArrowDown onClick={() => { setOpen(!open) }} />}
                            </div>
                            {open && TeacherEdudrop}
                        </div> : <div className='AdminSchoolName'>
                            <div className='AdminSchoolNamewrap'>
                                <h4>Edu-Global</h4>
                                {open2 ? < IoIosArrowForward onClick={() => { setOpen2(!open2) }} /> : <IoIosArrowDown onClick={() => { setOpen2(!open2) }} />}
                            </div>
                            {open2 && TeacherEdudrop2}
                        </div>}

                    </div>
                </div>
            </div>
            <div className='Teacher_Main_Wrap'>
                <div className='TeacherLeftHolder'>
                    <TeacherDashbLeft />
                </div>
                {toggle && TeacherLeft_Mobile}
                <div className='TeacherDashboardMiddle'>
                    <Routes>
                        <Route path="/" element={<DashBoard__Teacher />} />
                        <Route path="/tableteacher" element={<TimeTable_Teach />} />
                        <Route path="/allstudentteacher" element={<All_Students />} />
                        <Route path="/attendanceteacher" element={<Attendance_Teach />} />
                        <Route path="/accountsetteach" element={<AccountSetting_Teach />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Teachers_Dashb