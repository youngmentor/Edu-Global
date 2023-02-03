import './classes.css'
import { Route, Routes } from 'react-router-dom'
import AllClasses from './Allclasses/AllClasses'
import AddClasses from './AddClasses/AddClasses'
import EditClasses from './EditClasses/EditClasses'
import React from 'react'


export default function Clases() {

  return (
    <div className='classes'>
      <h1>
        Classes
      </h1>
      <Routes>
        <Route path='/' element={<AllClasses/>}/>
        <Route path='/addclasses' element={<AddClasses/>}/>
        <Route path='/editclasses' element={<EditClasses/>}/>
      </Routes>
    </div>
  )
}