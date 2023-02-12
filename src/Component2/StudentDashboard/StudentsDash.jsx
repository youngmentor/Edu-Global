import React, { useState } from 'react'
import StudentDashLeft from './StudentDashLeft'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const StudentsDash = () => {

    // const navigate = useNavigate()
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
                <div className=''>
                    <StudentDashLeft />
                </div>
                {toggle && studentLeft_Mobile}
                <div className=''>
                    
                </div>
            </div>
        </div>
    )
}

export default StudentsDash