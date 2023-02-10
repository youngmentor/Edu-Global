import './attendance.css'
import { Route, Routes } from 'react-router-dom'
import React from 'react'
import StudentAttendance from './StudentAttendance/StudentAttendance'
import TeacherAttendance from './TeacherAttendance/TeacherAttendance'

export default function Attendance() {

  return (
    <div className='Admin_Attendance'>
      <div className='AdminAttendanceWrap'>
        <Routes>
          <Route path='studentattendance' element={<StudentAttendance/>} />
          <Route path='teacherattendance' element={<TeacherAttendance/>} />
        </Routes>
      </div>
    </div>
  )
}