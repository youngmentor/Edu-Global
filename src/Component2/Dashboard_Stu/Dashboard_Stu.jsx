import React, { useState, useEffect } from 'react'
import "./Dashboard_Stu.css"
import Calendar from 'react-calendar'
import axios from 'axios';
import { addStudent } from '../../Redux/Features';
import { useDispatch, useSelector } from "react-redux";
const Dashboard_Stu = () => {
const [onestudent, setOneStudent]=useState()
  const [date, setDate] = useState(new Date());
  const student = useSelector((state) => state.Commerce.student)
  const handleChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const getStudent = () =>{
    axios.get(`https://eduglobal.onrender.com/api/admin/Student/${student._id}`)
    .then(res=> {setOneStudent(res.data.data)})

  }
  // console.log("this is what am looking for",onestudent)

  useEffect(() => {
    getStudent()
  }, [])

  const onestudentdata = {...onestudent}
  // console.log(onestudentdata)

  useEffect(() => {
    // console.log(res)
    // console.log(Allclass)
  },)
  return (
    <div className='Dashboard_Students_Main'>
      <div className='Dashboard_Students_Main_Wrap' >
        {
          onestudent ? <div className='Dashboard_Students_Info_Right' >
          <div className='Dashboard_Students_Info_Detail'>
            <img src='/UserImg.png' alt='' className='Dashboard_Students_Info_Img' />
            <h3>{onestudentdata.studentName}</h3>
          </div>
          <div className='Dashboard_Students_info'>
            <div className='Dashboard_Students_detail'>
              <h5>Reg No:</h5>
              <h5>{onestudentdata.regNumber}</h5>
            </div>
            <div className='Dashboard_Students_detail'>
              <h5>Date of Admission:</h5>
              <h5> {onestudentdata.admissionYear} </h5>
            </div>
            <div className='Dashboard_Students_detail'>
              <h5>Class:</h5>
              <h5> {onestudentdata.classes[0].nameOfClass} {onestudentdata.classes[0].classBranch} </h5>
            </div>
            <div className='Dashboard_Students_detail'>
              <h5>Date of Birth:</h5>
              <h5>{onestudentdata.DOB}</h5>
            </div>
            <div className='Dashboard_Students_detail'>
              <h5>Gender:</h5>
              <h5>{onestudentdata.gender}</h5>
            </div>
          </div>
        </div>:"Loading Your info"
        }
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