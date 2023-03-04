import React, { useState } from 'react'
import "./Dashboard_Stu.css"
import Calendar from 'react-calendar'
import axios from 'axios';
import { addStudent } from '../../Redux/Features';
import { useDispatch, useSelector } from "react-redux";
const Dashboard_Stu = () => {
const [oneStudent, setOneStudent]=useState([])
  const [date, setDate] = useState(new Date());
  const student = useSelector((state) => state.Commerce.student)
  const handleChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const getStudent = () =>{
    axios.get(`https://eduglobal.onrender.com/api/admin/Student/${student?._id}`)
    setOneStudent(res.data.data)
  }

  useEffect(() => {
    getStudent()

  }, [])
  useEffect(() => {
    console.log(res)
    // console.log(Allclass)
  }, [oneStudent])
  return (
    <div className='Dashboard_Students_Main'>
      <div className='Dashboard_Students_Main_Wrap' >
      {oneStudent?.map((i)=>(
          <div className='Dashboard_Students_Info_Right' >
          <div className='Dashboard_Students_Info_Detail'>
            <img src='/UserImg.png' alt='' className='Dashboard_Students_Info_Img' />
            <h3>{i.studentName}</h3>
          </div>
          <div className='Dashboard_Students_info'>
            <div className='Dashboard_Students_detail'>
              <h5>Reg No:</h5>
              <h5>{i.regNumbe}</h5>
            </div>
            <div className='Dashboard_Students_detail'>
              <h5>Date of Admission:</h5>
              <h5> {i.admissionYear} </h5>
            </div>
            <div className='Dashboard_Students_detail'>
              <h5>Class:</h5>
              <h5> {i.nameOfClass} {i.classBranch} </h5>
            </div>
            <div className='Dashboard_Students_detail'>
              <h5>Date of Birth:</h5>
              <h5>{i.DOB}</h5>
            </div>
            <div className='Dashboard_Students_detail'>
              <h5>Gender:</h5>
              <h5>{i.gender}</h5>
            </div>
          </div>
        </div>
      ))}
        <div className='Dashboard_Students_Left'>
          <div className='Dashboard_Students_Msg' >
            <h4>Suliton Welcome to student portal<br /> you have access to your info</h4>
            <img src='/Message.png' alt='' className='Dashboard_Stu_Info_Img' />
          </div>
          <Calendar onChange={handleChange} value={date} className="Student_Calender" />
        </div>
      </div>
    </div>
  )
}

export default Dashboard_Stu