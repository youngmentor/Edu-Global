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
  
    axios.get(`https://eduglobal.onrender.com/api/admin/Teacher/${teacher[0]?._id}`)
    
    .then(res=> {
      setOneTeacher(res.data.data)
    })
      .catch((e)=>{
        console.log(e)
      })
  }
 
  useEffect(() => {
    getTeacher()
    // console.log(teacher[0]?._id)

  }, [])
  const oneteacherdata = {...oneteacher}
  return (
    <div className='Dashboard_Teach_Main'>
      <div className='Dashboard_Teach_Main_Wrap' >
        {oneteacher ?  <div className='Dashboard_Teach_Info_Right' >
          <div className='Dashboard_Teach_Info_Detail'>
            <img src='/UserImg.png' alt='' className='Dashboard_Teach_Info_Img' />
            <h3>{oneteacherdata.teacherName}</h3>
          </div>
          <div className='Dashboard_info'>           
             <div className='Dashboard_detail'>
               <h5>Class:</h5>
               <h5>{oneteacherdata.teacherclass.nameOfClass} {oneteacherdata.teacherclass.classBranch}  </h5>
             </div>
             <div className='Dashboard_detail'>
               <h5>Subject:</h5>
               <h5>{oneteacherdata.subjectToTeach}</h5>
             </div>
             <div className='Dashboard_detail'>
               <h5>Gender:</h5>
               <h5>{oneteacherdata.gender}</h5>
             </div>
             <div className='Dashboard_detail'>
               <h5>Contact:</h5>
               <h5>{oneteacherdata.phoneNumber}</h5>
             </div>
             <div className='Dashboard_detail'>
               <h5>Date of Employment:</h5>
               <h5>{oneteacherdata.joiningDate}</h5>
             </div>
             <div className='Dashboard_detail'>
               <h5>Experience:</h5>
               <h5>{oneteacherdata.experience }</h5>
             </div>
          </div>
          </div>
          : "Loading..."}
       
        
      <div className='Dashboard_Teach_Left'>
        <div className='Dashboard_Teach_Msg' >
        {oneteacher ? 
          <h4>{oneteacherdata.teacherName} Welcome to Teacher's portal<br/> you have access to your info</h4>
          : null}
          <img src='/Message.png' alt='' className='Dashboard_Teach_Info_Mss' />
        </div> 
      
        <Calendar onChange={handleChange} value={date} className="Teach_Calender" />
      </div>
      </div>
    </div>
  )
}

export default Dashboard_Teacher