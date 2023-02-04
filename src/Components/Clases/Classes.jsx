import './classes.css'
import { Route, Routes } from 'react-router-dom'
import AllClasses from './Allclasses/AllClasses'
import AddClasses from './AddClasses/AddClasses'
import EditClasses from './EditClasses/EditClasses'
import React from 'react'


export default function Clases() {

  return (
    <div className='classes'>
      {/* <div style={{display: "flex", width: "100%"}}> */}
      <Routes>
        <Route path='allClasses' element={<AllClasses/>}/>
        <Route path='addclasses' element={<AddClasses/>}/>
        <Route path='editclasses' element={<EditClasses/>}/>
      </Routes>
      {/* </div> */}
    </div>
  )
}