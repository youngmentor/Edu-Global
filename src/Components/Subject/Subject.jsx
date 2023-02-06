import React from 'react'
import './Subject.css'
import ClasseswSubject from './ClasswSubject/ClasseswSubject'
import AddnSubject from './AddNnSubject/AddnSubject'
const Subject = () => {
  return (
    <div className='AdminSubject' >
        <div className='classesWrap'>
        <Routes>
          <Route path='classwsubject' element={<ClasseswSubject />} />
          <Route path='addnsubject' element={<AddnSubject />} />
        </Routes>
      </div>
    </div>
  )
}

export default Subject