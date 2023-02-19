import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FileSaver from 'file-saver';

function Timetabl_Stu({ studentId }) {
  const [studentName, setStudentName] = useState('');
  const [timetable, setTimetable] = useState([]);


  const handleDownload = () => {
    const csvData = timetable.map(event => {
      return `${event.subject}, ${event.date}, ${event.startTime}, ${event.endTime}`;
    }).join('\n');
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    FileSaver.saveAs(blob, `${studentName}_timetable.csv`);
  }
  

  useEffect(() => {
    axios.get(`/api/timetable/${studentId}`)
      .then(response => {
        setStudentName(response.data.name);
        setTimetable(response.data.timetable);
      })
      .catch(error => {
        console.error(error);
      });
  }, [studentId]);
  


  return (
    <div className='Student_TimeTable '>
      <h2>{studentName} Suliton's Timetable</h2>
      {timetable.map((event, index) => (
        <div key={index}>
          <p>Subject: {event.subject}</p>
          <p>Date: {event.date}</p>
          <p>Start Time: {event.startTime}</p>
          <p>End Time: {event.endTime}</p>
        </div>
      ))}
      <button onClick={handleDownload} className="DownloadAdminBtt" >Download Timetable</button>
    </div>
  );  
}
export default Timetabl_Stu;