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
      <div className='AdminRightDiv'>
        <div className='AdminCardHolder'>
          <div className='AdminCard'>
            <div className='AdminCardWrap'>
              <div className='AdminGraduationCap'>
                <h4>Total Students:</h4>
                <FaGraduationCap style={{ width: "50px", height: "50px" }} />
              </div>
              <div className='AdminCardDetails'>
                <h2>0</h2>
              </div>
            </div>
          </div>
          <div className='AdminCard'>
            <div className='AdminCardWrap'>
              <div className='AdminGraduationCap'>
                <h4>Total Employee:</h4>
                <FaGraduationCap style={{ width: "50px", height: "50px" }} />
              </div>
              <div className='AdminCardDetails'>
                <h2>0</h2>
              </div>
            </div>
          </div>
          <div className='AdminCard'>
            <div className='AdminCardWrap'>
              <div className='AdminGraduationCap'>
                <h4>Total Subject:</h4>
                <FaGraduationCap style={{ width: "50px", height: "50px" }} />
              </div>
              <div className='AdminCardDetails'>
                <h2>0</h2>
              </div>
            </div>
          </div>
          <div className='AdminCard'>
            <div className='AdminCardWrap'>
              <div className='AdminGraduationCap'>
                <h4>Total Classes:</h4>
                <FaGraduationCap style={{ width: "50px", height: "50px" }} />
              </div>
              <div className='AdminCardDetails'>
                <h2>0</h2>
              </div>
            </div>
          </div>
          <Calendar onChange={handleChange} value={date} className="Calender" />
        </div>
      </div>
    </div>
  )
}