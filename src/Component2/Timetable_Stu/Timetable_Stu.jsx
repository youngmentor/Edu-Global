import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import FileSaver from 'file-saver';

function Timetabl_Stu() {
  const [timetableUrl, setTimetableUrl] = useState(null);

  useEffect(() => {
    // const fetchTimetable = async () => {
    //   try {
    //     const response = await axios.get('/api/timetable');
    //     setTimetableUrl(response.data.url);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    // fetchTimetable();
  }, []);

  const handleDownloadClick = () => {
    window.open(timetableUrl, '_blank');
  };
  


  return (
    <div className='Student_TimeTable'>
    <h2>View Timetable</h2>
    {timetableUrl ? (
      <div>
        <p>Download the timetable:</p>
        <button onClick={handleDownloadClick}>Download</button>
      </div>
    ) : (
      <p>No timetable available</p>
    )}
  </div>
  );  
}
export default Timetabl_Stu; 
  // <div className='Student_TimeTable '>
  //     <h2>{studentName} Suliton's Timetable</h2>
  //     {timetable.map((event, index) => (
  //       <div key={index}>
  //         <p>Subject: {event.subject}</p>
  //         <p>Date: {event.date}</p>
  //         <p>Start Time: {event.startTime}</p>
  //         <p>End Time: {event.endTime}</p>
  //       </div>
  //     ))}
  //     <button onClick={handleDownload} className="DownloadAdminBtt" >Download Timetable</button>
  //   </div>