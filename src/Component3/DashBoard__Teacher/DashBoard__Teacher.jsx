import React, {useState} from 'react'
import "./DashBoard__Teacher.css"
import Calendar from 'react-calendar'
const Dashboard_Teacher= () => {

  const [date, setDate] = useState(new Date());

  const handleChange = (selectedDate) => {
      setDate(selectedDate);
  };
  return (
    <div className='Dashboard_Teach_Main'>
      <div className='Dashboard_Teach_Main_Wrap' >
        <div className='Dashboard_Teach_Info_Right' >
          <div className='Dashboard_Teach_Info_Detail'>
            <img src='/UserImg.png' alt='' className='Dashboard_Stu_Info_Img' />
            <h3>Mr Anthony</h3>
          </div>
          <div className='Dashboard_info'>
             <div className='Dashboard_detail'>
               <h5>Reg No:</h5>
               <h5>001</h5>
             </div>
             <div className='Dashboard_detail'>
               <h5>Date of Employment:</h5>
               <h5>2008-10-15</h5>
             </div>
             {/* <div className='Dashboard_detail'>
               <h5>Class:</h5>
               <h5>ss3</h5>
             </div> */}
             <div className='Dashboard_detail'>
               <h5>Subject:</h5>
               <h5>Physic</h5>
             </div>
             <div className='Dashboard_detail'>
               <h5>Gender:</h5>
               <h5>Male</h5>
             </div>
          </div>
        </div>
      <div className='Dashboard_Teach_Left'>
      <div className='Dashboard_Teach_Msg' >
          <h4>Mr Anthony Welcome to Teacher's portal<br/> you have access to your info</h4>
          <img src='/Message.png' alt='' className='Dashboard_Teach_Info_Mss' />
        </div>
        <Calendar onChange={handleChange} value={date} className="TeachCalender" />
      </div>
      </div>
    </div>
  )
}

export default Dashboard_Teacher