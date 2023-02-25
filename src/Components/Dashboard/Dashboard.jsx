import './dashboard.css'
import Calendar from 'react-calendar'
import React, { useState,useEffect } from 'react'
import { FaGraduationCap } from "react-icons/fa";
import axios from 'axios';
export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  const [Allclass, setAllClass] = useState([])
  const handleChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const getOne = async () => {
    const res = await axios.get(`https://eduglobal.onrender.com/api/admin/allClass/${user?._id}`)
    // console.log(res)
    setAllClass(res.data.data)
    // console.log(res.data.data)
    // res.status === 201? dispatch(addClass(res.data.data)) : null
  };

  useEffect(() => {
    // console.log(res)
    // console.log(Allclass)
  }, [Allclass])
  return (
    <div className='AdminRight'>
      <div className='AdminRightDiv'>
      <div className='Admin_Msg' >
            <h4>Welcome to Admin Dashboard <br /> Your Account is verified</h4>
            <img src='/Message.png' alt='' className='Admin_Info_Mssg' />
          </div>
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