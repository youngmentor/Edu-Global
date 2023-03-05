import React, {useState, useEffect} from 'react'
import "./DashBoard__Teacher.css"
import Calendar from 'react-calendar'
import { useSelector } from 'react-redux'
import axios from 'axios'
const Dashboard_Teacher= () => {
  const teacher = useSelector((state) => state.Commerce.teacher)
  const [oneteacher, setOneTeacher]=useState()
  const [date, setDate] = useState(new Date());
  const handleChange = (selectedDate) => {
      setDate(selectedDate);
  };

  const getTeacher = () =>{
    axios.get(`https://eduglobal.onrender.com/api/admin/Teacher/${teacher._id}`)
    .then(res=> {setOneTeacher(res.data.data)})

  }
  useEffect(() => {
    getTeacher()
  }, [])
  
  return (
    <div className='Dashboard_Teach_Main'>
      <div className='Dashboard_Teach_Main_Wrap' >
        <div className='Dashboard_Teach_Info_Right' >
          <div className='Dashboard_Teach_Info_Detail'>
            <img src='/UserImg.png' alt='' className='Dashboard_Stu_Info_Img' />
            <h3>{oneteacher.teacherName}</h3>
          </div>
          <div className='Dashboard_info'>           
             <div className='Dashboard_detail'>
               <h5>Class:</h5>
               <h5>{oneteacher.teacherclass.nameOfClass} {oneteacher.teacherclass.classBranch}  </h5>
             </div>
             <div className='Dashboard_detail'>
               <h5>Subject:</h5>
               <h5>{oneteacher.subjectToTeach}</h5>
             </div>
             <div className='Dashboard_detail'>
               <h5>Gender:</h5>
               <h5>{oneteacher.gender}</h5>
             </div>
             <div className='Dashboard_detail'>
               <h5>Contact:</h5>
               <h5>{oneteacher.phoneNumber}</h5>
             </div>
             <div className='Dashboard_detail'>
               <h5>Date of Employment:</h5>
               <h5>{oneteacher.joiningDate}</h5>
             </div>
             <div className='Dashboard_detail'>
               <h5>Experience:</h5>
               <h5>{oneteacher.experience }</h5>
             </div>
          </div>
        </div>
      <div className='Dashboard_Teach_Left'>
      <div className='Dashboard_Teach_Msg' >
          <h4>{oneteacher.teacherName} Welcome to Teacher's portal<br/> you have access to your info</h4>
          <img src='/Message.png' alt='' className='Dashboard_Teach_Info_Mss' />
        </div>
        <Calendar onChange={handleChange} value={date} className="Teach_Calender" />
      </div>
      </div>
    </div>
  )
}

export default Dashboard_Teacher