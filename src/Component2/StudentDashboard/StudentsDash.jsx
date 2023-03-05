import React, { useState, useEffect } from 'react'
import StudentDashLeft from './StudentDashLeft'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Routes, Route } from 'react-router-dom';
import Dashboard_Stu from '../Dashboard_Stu/Dashboard_Stu';
import TimeTableMain from '../Timetable_Stu/TimeTableMain';
import Report_Stu from '../Report_Stu/Report_Stu';
import AccountSetting_Stu from '../AccountSetting_Stu/AccountSetting_Stu';
import Payment from '../PayFee/Payment';
import { AiOutlineSetting } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import "./StudentDash.css"
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { clearStudent } from '../../Redux/Features';
const StudentsDash = () => {

    const navigate = useNavigate()
    const [onestudent, setOneStudent]=useState()
    const [toggle, setToggle] = useState(false);
    const [open, setOpen] = useState(false)
    const student = useSelector((state) => state.Commerce.student)


     const getStudent = () =>{
    axios.get(`https://eduglobal.onrender.com/api/admin/Student/${student._id}`)
    .then(res=> {setOneStudent(res.data.data)})

  }
  const onestudentdata = {...onestudent}
   useEffect(() => {
    getStudent()
  }, [])

  const dispatch= useDispatch()
  const logOut = async () => {
    console.log("clicked")
    const res = await axios.post(`https://eduglobal.onrender.com/api/student/logout/${student?._id}`)
    console.log(res.data)
    res.status === 200 ? dispatch(clearStudent()) : null
    res.status === 200 ? navigate('/loginuser/login') : null
}

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
                <div className='Student_Profile'>
                    <Link to={"accountsetStu"} className="StudentSetting"> <AiOutlineSetting />  <p>Account setting</p></Link>
                    <div className="StudentSetting"> <BiLogOut/> <p onClick={() => { logOut() }} > Log out</p></div>
                    <div className="StudentSetting">  < AiFillHome/> <h5 onClick={() => navigate("/")}>Home</h5></div>
                </div>
            )}
        </div>
    )
    return (
        <div className='Student_Dashboard_Main'>
            <div className='Student_Dashboard_header'>
                <div className='Student_header_wrap'>
                    <div className='StudentBurger'>
                        {toggle ? <FaTimes onClick={() => { setToggle(!toggle) }} /> : < GiHamburgerMenu onClick={() => { setToggle(!toggle) }} />}
                    </div>
                    <div className='StudentLogo'>
                        <img src="/NewLogo1.png" alt="Logo" onClick={() => navigate("/")} className="StudentHeaderLogo" />
                    </div>
                    <div className='StudentSchoolName'>
                        <div className='StudentSchoolNamewrap'>
                            {onestudent ? <h4>{onestudentdata.studentName}</h4>: "Edu-Global"}
                            {open ? < IoIosArrowForward onClick={() => { setOpen(!open) }} /> : <IoIosArrowDown onClick={() => { setOpen(!open) }} />}
                        </div>
                        {open && StudentEdudrop}
                    </div>
                </div>
            </div>
            <div className='Student_Dashboard_Main_Wrap'>
                <div className='StudentLeftHolder'>
                    <StudentDashLeft />
                </div>
                {toggle && studentLeft_Mobile}
                <Routes>
                    <Route path="/" element={<Dashboard_Stu />} />
                    <Route path="/table" element={<TimeTableMain />} />
                    <Route path="/report" element={<Report_Stu />} />
                    <Route path="/payfee" element={<Payment />} />
                    <Route path="/accountsetStu" element={<AccountSetting_Stu />} />
                </Routes>
            </div>
        </div>
    )
}

export default StudentsDash