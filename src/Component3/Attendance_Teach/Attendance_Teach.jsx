import React, { useState } from 'react';
import axios from 'axios';
import "./Attendance_Teach.css"
const Attendance_Teach = () => {
  const [attendanceData, setAttendanceData] = useState({});

  const handleAttendanceChange = (teacherId, present) => {
    setAttendanceData({
      ...attendanceData,
      [teacherId]: present
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/attendance/teacher', attendanceData)
      .then(response => {
        console.log('Attendance data submitted successfully:', response.data);
      })
      .catch(error => {
        console.error('Failed to submit attendance data:', error);
      });
  };
  const teachers = [
    {
      id: 1,
      name: "John Smith"
    },
    {
      id: 2,
      name: "Jane Doe"
    },
    {
      id: 3,
      name: "Bob Johnson"
    },
    {
        id: 4,
        name: "Olalere Suliton"
      },
      {
        id: 5,
        name: "Olalere Suliton"
      },
      {
        id: 6,
        name: "Olalere Suliton"
      },

  ];
  return (
    <div className='TeacherAttendance_Main'>
      <h2>Take Student Attendance</h2>
      <form onSubmit={handleSubmit} className="TeacherAttendance_Form_Wrap">
        <table>
          <thead className='TeacherAttendance_Head'>
            <tr >
              <th>Teacher ID</th>
              <th>Name</th>
              <th>Present</th>
            </tr>
          </thead>
          <tbody className='TeacherAttendance_Body'>
            {teachers.map((teacher) => (
              <tr key={teacher.id}>
                <td>{teacher.id}</td>
                <td>{teacher.name}</td>
                <td>
                  <input
                    type="checkbox"
                    value={attendanceData[teacher.id]}
                    onChange={(event) =>
                      handleAttendanceChange(
                        teacher.id,
                        event.target.checked
                      )
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>  
      </form>
      <button type="submit" className='TeacherAttendance_Submit_Bttn'>Submit</button>
    </div>
  );
};

export default Attendance_Teach;
