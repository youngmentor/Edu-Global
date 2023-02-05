import './dashboard.css'
import Calendar from 'react-calendar'
import React, { useState } from 'react'
import { FaGraduationCap } from "react-icons/fa";

export default function Dashboard() {
    const [date, setDate] = useState(new Date());

    const handleChange = (selectedDate) => {
        setDate(selectedDate);
    };
    return (

        <div className='AdminRight'>
            <div className='AdminwelcomeMssg'>
                <div>
                    <h3>Welcome to admin dashboard</h3>
                </div>
            </div>
            <div className='AdminCardHolder'>
                <div className='AdminCard'>
                  <div className='AdminCardWrap'>
                  <div className='AdminCardDetails'>
                        <h4>Jss1</h4>
                        <h2>1</h2>
                        <h4>Students</h4>
                    </div>
                    <div className='AdminGraduationCap'>
                      <FaGraduationCap style={{ width: "50px", height: "50px" }}  />  
                    </div>  
                  </div>
                </div>
                <div className='AdminCard'>
                <div className='AdminCardWrap'>
                  <div className='AdminCardDetails'>
                        <h4>Jss1</h4>
                        <h2>1</h2>
                        <h4>Students</h4>
                    </div>
                    <div className='AdminGraduationCap'>
                      <FaGraduationCap style={{ width: "50px", height: "50px" }}  />  
                    </div>  
                  </div>
                </div>
                <div className='AdminCard'>
                <div className='AdminCardWrap'>
                  <div className='AdminCardDetails'>
                        <h4>Jss1</h4>
                        <h2>1</h2>
                        <h4>Students</h4>
                    </div>
                    <div className='AdminGraduationCap'>
                      <FaGraduationCap style={{ width: "50px", height: "50px" }}  />  
                    </div>  
                  </div>
                </div>
                <div className='AdminCard'>
                <div className='AdminCardWrap'>
                  <div className='AdminCardDetails'>
                        <h4>Jss1</h4>
                        <h2>1</h2>
                        <h4>Students</h4>
                    </div>
                    <div className='AdminGraduationCap'>
                      <FaGraduationCap style={{ width: "50px", height: "50px" }}  />  
                    </div>  
                  </div>
                </div>
            </div>
            <Calendar onChange={handleChange} value={date} className="Calender" />
        </div>
    )
}