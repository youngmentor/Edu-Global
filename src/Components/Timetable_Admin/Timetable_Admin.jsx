import React from 'react';
import "./Timetable_Stu.css"
import timetableData from './TimetableData';
function Timetable_Admin() {
  return (
    <table className='Admin_TimeTable'>
      <thead>
        <tr>
          <th>Time</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
        </tr>
      </thead>
      <tbody>
        {timetableData.map((row, index) => (
          <tr key={index}>
            <td>{row.time}</td>
            <td>{row.monday}</td>
            <td>{row.tuesday}</td>
            <td>{row.wednesday}</td>
            <td>{row.thursday}</td>
            <td>{row.friday}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Timetable_Admin;