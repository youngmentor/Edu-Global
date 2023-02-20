import React, {useState} from 'react'
import "./Dashboard_Stu.css"
import Calendar from 'react-calendar'
const Dashboard_Stu = () => {

  const [date, setDate] = useState(new Date());

  const handleChange = (selectedDate) => {
      setDate(selectedDate);
  };
  return (
    <div className='Dashboard_Student_Main'>
      <div className='Dashboard_Student_Main_Wrap' >
        <div className='Dashboard_Stu_Info_Right' >
          <div className='Dashboard_Stu_Info_Detail'>
            <img src='/UserImg.png' alt='' className='Dashboard_Stu_Info_Img' />
            <h3>Suliton</h3>
          </div>
          <div className='Dashboard_info'>
             <div className='Dashboard_detail'>
               <h5>Reg No:</h5>
               <h5>001</h5>
             </div>
             <div className='Dashboard_detail'>
               <h5>Date of Admission:</h5>
               <h5>2008-10-15</h5>
             </div>
             <div className='Dashboard_detail'>
               <h5>Class:</h5>
               <h5>ss3</h5>
             </div>
             <div className='Dashboard_detail'>
               <h5>Date of Birth:</h5>
               <h5>001</h5>
             </div>
             <div className='Dashboard_detail'>
               <h5>Gender:</h5>
               <h5>Male</h5>
             </div>
          </div>
        </div>
      <div className='Dashboard_Stu_Left'>
      <div className='Dashboard_Stu_Msg' >
          <h4>Suliton Welcome to student portal<br/> you have access to your info</h4>
          <img src='/Message.png' alt='' className='Dashboard_Stu_Info_Mss' />
        </div>
        <Calendar onChange={handleChange} value={date} className="Calender" />
      </div>
      </div>
    </div>
  )
}

export default Dashboard_Stu