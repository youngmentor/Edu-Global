import React, { useEffect, useState } from 'react'
import "./TimeTable_Teach.css"
import axios from 'axios';
const TimeTable_Teach = () => {

  const [timetables, setTimetables] = useState(null);

  useEffect(() => {
    const fetchTimetable = async () => {
      try {
        const response = await axios.get('/api/timetable');
        setTimetables(response.data.url);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTimetable();
  }, []);

  const handleDownloadClick = () => {
    window.open(timetables, '_blank');
  };
  return (
    <div className='Teacher_TimeTable'>
      <h2>View Timetable</h2>
      {timetables ? (
        <div>
          <p>Download the timetable:</p>
          <button onClick={handleDownloadClick}>Download</button>
        </div>
      ) : (
        <p>No timetable available</p>
      )}
    </div>
  )
}
export default TimeTable_Teach