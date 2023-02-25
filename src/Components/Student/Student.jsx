import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './Student.css'
import AddnStudent from './AddnStudent/AddnStudent'
import UpdateStudent from './UpdateStudent/UpdateStudent'
const Student = () => {
  return (
    <div className='AdminStudent'>
         <div className='AdminStuWrap'>
        <Routes>
          <Route path='/addnstudents' element={<AddnStudent/>} />
          <Route path='/updatestudents/:id' element={<UpdateStudent />} />
        </Routes>
      </div>
    </div>
  )
}
 
export default Student