import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './Subject.css'
import ClasseswSubject from './ClasswSubject/ClasseswSubject'
import AddnSubject from './AddNnSubject/AddnSubject'
const Subject = () => {
  return (
    <div className='AdminSubject' >
        <div className='AdminSubWrap'>
        <Routes>
          <Route path='classeswsubject' element={<ClasseswSubject />} />
          <Route path='addnsubject' element={<AddnSubject />} />
        </Routes>
      </div>
    </div>
  )
}

export default Subject