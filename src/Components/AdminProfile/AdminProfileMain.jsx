import React from 'react'
import "./AdminProfileMain.css"
import AdminProfile from './AdminProfileStting/AdminProfile'
import { Route, Routes } from 'react-router-dom'
const AdminProfileMain = () => {
  return (
    <div className='AdminProfileMain_Wrap'>
        <Routes>
            <Route path='adminprofileupdate' element={<AdminProfile />}/>
        </Routes>
    </div>
  )
}

export default AdminProfileMain