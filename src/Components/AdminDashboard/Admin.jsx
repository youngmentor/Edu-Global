import React, {useState} from 'react'
import './Admin.css'
import AdminLeft from './AdminLeft'
import { AdminData } from './AdminData'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'
const Admin = () => {
    const [date, setDate] = useState(new Date());
    const [toggle, setToggle] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
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
            <div className='AdminBurger'>
                    {toggle ? <GiHamburgerMenu onClick={handleToggle} /> : <FaTimes onClick={handleToggle} />}
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
                        <h3>Welcome to admin dashboard</h3>
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