import React, { useState } from 'react'
import './Admin.css'
import AdminLeft from './AdminLeft'
import { AdminData } from './AdminData'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom'

const Admin = () => {
    const navigate = useNavigate()
    const [date, setDate] = useState(new Date());
    const [toggle, setToggle] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
        setIsOpen(!isOpen)
    };

    const handleChange = (selectedDate) => {
        setDate(selectedDate);
    };
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
                        {open ? < IoIosArrowForward onClick={() => { setOpen(!open) }}/> : <IoIosArrowDown onClick={() => { setOpen(!open) }}/>}
                       </div>
                      {open &&   (
                        <div className='AdminProfile'>
                        <p>Account setting</p>
                        <p>Profile</p>
                        <p>Log out</p>
                        </div>
                      )}
                    </div>
                </div>
            </div>
            <div className='AdminLeftWrapper'>
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
                <div className='AdminLeft'>
                    {AdminData.map((i) => (
                        <AdminLeft key={i.id}{...i} />
                    ))}
                </div>
                <div className='AdminRight'>
                    <div className='AdminwelcomeMssg'>
                        <div>
                        <h3>Welcome to admin dashboard</h3>
                        </div>
                    </div>
                    <div className='AdminCardHolder'>
                        <div className='AdminCard'>
                            <h1>Cards</h1>
                        </div>
                        <div className='AdminCard'>
                            <h1>Cards</h1>
                        </div>
                        <div className='AdminCard'>
                            <h1>Cards</h1>
                        </div>
                        <div className='AdminCard'>
                            <h1>Cards</h1>
                        </div>
                    </div>
                    <Calendar onChange={handleChange} value={date} className="Calender" />
                </div>
            </div>
        </div>
    )
}

export default Admin;