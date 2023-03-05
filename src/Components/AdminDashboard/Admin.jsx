import React, { useState, useContext, useEffect } from 'react'
import './Admin.css'
import AdminLeft from './AdminLeft'
// import { AdminData } from './AdminData'
import 'react-calendar/dist/Calendar.css';
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'
import { IoIosArrowDown } from "react-icons/io";
import { AiFillHome, AiOutlineProfile } from "react-icons/ai";
import { RiPencilRulerLine } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineSetting } from "react-icons/ai";
import { MdOutlineClass } from "react-icons/md";
import { useNavigate, Link } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import Clases from '../Clases/Classes'
import Attendance from '../Attendance/Attendance';
import Fee from '../Fee/Fee';
import Subject from '../Subject/Subject'
import Student from '../Student/Student'
import Teachers from '../Teachers/Teachers'
import Timetable_Admin from '../Timetable_Admin/Timetable_Admin';
import AdminProfile from '../AdminProfile/AdminProfileStting/AdminProfile';
import AdminProfileMain from '../AdminProfile/AdminProfileMain';
import AccountSetting from '../AccountSetting/AccountSetting';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../../Redux/Features';
import { BiLogOut } from "react-icons/bi";
const Admin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const dispatch=useDispatch()
    const navigate = useNavigate()
    const [toggle, setToggle] = useState(false);
    const [open, setOpen] = useState(false)
    const user = useSelector((state) => state.Commerce.user)
    const [allAdmin, setAllAdmin] = useState([])
    const AdminData = [
         {
            id: 1,
            title: "Classes",
            text1: "All classes",
            text2: "Add New Classes",
            // text3: "Edit or Delete",
            icon1: < MdOutlineClass/>,
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
            title: "Students",
            text1: "All students",
            // text2: "Add student",
            icon1: < FaUserFriends />,
            icon2: <IoIosArrowForward />,
            icon3: <SlArrowDown />,
            click: "/admin/student",
            click1: "/admin/student/addnstudents",
            // click2: "/admin/student/updatestudents",
        },
        {
            id: 4,
            title: "Teacher",
            text1: "All Teachers",
            // text2: "Add Teacher",
            icon1: < FaUserFriends />,
            icon2: <IoIosArrowForward />,
            icon3: <SlArrowDown />,
            click: "/admin/teachers",
            click1: "/admin/teachers/allteacher",
            // click2: "/admin/teachers/addteacher",

        },
        // , {
        //     id: 5,
        //     title: "Attendance",
        //     text1: "Mark Student Attendance",
        //     text2: "Teacher Attendance",
        //     icon1: < AiFillHome />,
        //     icon2: <IoIosArrowForward />,
        //     icon3: <SlArrowDown />,
        //     click: "/admin/attendance",
        //     click1: "/admin/attendance/studentattendance",
        //     click2: "/admin/attendance/teacherattendance",
        // }
        // , {
        //     id: 6,
        //     title: "TimeTable",
        //     text1: "Upload TimeTable",
        //     icon1: < AiFillHome />,
        //     icon2: <IoIosArrowForward />,
        //     icon3: <SlArrowDown />,
        //     click: "/admin/timetable",
        //     click1: "/admin/viewtimetable"


        // }
        // , {
        //     id: 7,
        //     title: "Fees",
        //     text1: "Pay Fees",
        //     icon1: < AiFillHome />,
        //     icon2: <IoIosArrowForward />,
        //     icon3: <SlArrowDown />,
        //     click: "/admin/fee"

        // },
        {
            id: 8,
            title: "Profile",
            text1: "Edit Profile",
            icon1: < AiOutlineProfile/>,
            icon2: <IoIosArrowForward />,
            icon3: <SlArrowDown />,
            click: "admin/adminprofile",
            click1: "/admin/adminprofile/adminprofileupdate"
        }
    ];
    const getAdmin = async (e) => {
        const res = await axios.get(`https://eduglobal.onrender.com/api/admin/Admin/${user?._id}`)
        setAllAdmin(res.data.data)
        // console.log(res.data.data)
      };
      useEffect(() => {
        getAdmin()
      }, [])
      const AllAdmin ={...allAdmin}
    const logOut = async () => {
        console.log("clicked")
        const res = await axios.post(`https://eduglobal.onrender.com/api/admin/logout/${user?._id}`)
        setIsLoggedIn(true)
        console.log(res.data)
        res.status === 200 ? dispatch(clearUser()) : null
        res.status === 200 ? navigate('/loginuser/login') : null
        // console.log(user?._id)
    }
 const Login =(()=>{
    setIsLoggedIn(false)
    res.status === 200 ? navigate('/loginuser/login') : null
 })
    const adminLeft_Mobile = (
        <div className='AdminLeftMobile_co'>
            {
                toggle && (
                    <div className='AdminLeftMobile_mobile' >
                        <div onClick={() => { navigate("/admin") }} className='AdminLeftWrap_title1'><h4>Dashboard</h4></div>
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
                  <Link to={"accountsetadmin"} className="AdminSetting"> <AiOutlineSetting/>  <p>Account setting</p></Link>
                  <div className="AdminSetting"> < AiOutlineProfile/> <p onClick={()=> navigate("/admin/adminprofile/adminprofileupdate")}>Profile</p> </div>
                  {isLoggedIn ? (<div className="AdminSetting"> <BiLogOut />  <p onClick={() => { logOut() }}>Log out</p></div>): (<div>  <p onClick={()=>{Login()}}>Log in</p></div>)}
                   <div className="AdminSetting">  < AiFillHome /> <h5 onClick={() => navigate("/")}  >Home</h5></div>
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
                        <h4>{AllAdmin.nameOfSchool}</h4>
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
                            <div onClick={() => { navigate("/admin") }} className='AdminLeftWrap_title1'> < AiFillHome /> <h4>Dashboard</h4></div>
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
                        <Route path="/viewtimetable" element={< Timetable_Admin  />} />
                        <Route path="/attendance/*" element={<Attendance />} />
                        <Route path="/fee" element={<Fee />} />
                        <Route path="/adminprofile/*" element={<AdminProfileMain/>}/>
                        <Route path="/accountsetadmin" element={<AccountSetting/>}/>
                    </Routes>
               
                </div>
            </div>
        </div>
    )
}

export default Admin;
