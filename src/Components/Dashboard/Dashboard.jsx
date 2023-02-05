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
                  <div className='AdminGraduationCap'>
                  <h4>Total Students:</h4>
                      <FaGraduationCap style={{ width: "50px", height: "50px" }}  />  
                    </div>
                  <div className='AdminCardDetails'>  
                        <h2>60</h2>
                    </div>  
                  </div>
                </div>
                <div className='AdminCard'>
                <div className='AdminCardWrap'>
               
                <div className='AdminGraduationCap'>
                <h4>Total Employee:</h4>
                      <FaGraduationCap style={{ width: "50px", height: "50px" }}  />  
                    </div> 
                  <div className='AdminCardDetails'>
                        <h2>54</h2>
                    </div>                
                  </div>
                </div>
                <div className='AdminCard'>
                <div className='AdminCardWrap'>
               
                <div className='AdminGraduationCap'>
                <h4>Total Subject:</h4>
                      <FaGraduationCap style={{ width: "50px", height: "50px" }}  />  
                    </div> 
                  <div className='AdminCardDetails'>
                        <h2>45</h2>
                    </div> 
                  </div>
                </div>
                <div className='AdminCard'>
                <div className='AdminCardWrap'>
                
                <div className='AdminGraduationCap'>
                <h4>Total Classes:</h4>
                      <FaGraduationCap style={{ width: "50px", height: "50px" }}  />  
                    </div>
                  <div className='AdminCardDetails'>
                        <h2>14</h2>
                      
                    </div>  
                  </div>
                </div>
            </div>
            <Calendar onChange={handleChange} value={date} className="Calender" />
        </div>
    )
}