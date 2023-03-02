import './teachers.css'
import AllTeachers from './AllTeachers/AllTeachers'
import AddTeacher from './AddTeacher/AddTeacher'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

export default function Teachers() {

  return (
    <div className='AdminTeachers'>
      <div className='AdminTeachers_Wrap'>
        <Routes>
          <Route path="/allteacher" element={<AllTeachers/>} />
          <Route path="/addteacher/:id" element={<AddTeacher/>}/>
        </Routes>
      </div>
    </div>
  )
}