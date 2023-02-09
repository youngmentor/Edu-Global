import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './Login/Login'
import LoginStudent from './LoginStudent/LoginStudents'
import LoginTeacher from './LoginTeacher/LoginTeacher'
import Loading from '../LoadingSpin/Loading'
import './LoginUser.css'
const LoginUser = () => {
   const [load, setLoad]= useState(false)
    return (
        <div className='LoginMainPage'>
            {   
            
            load ? <Loading/> : <div className='LoginMainPageWrap'>
                <Routes>
                    <Route path="login" element={<Login />} />
                    <Route path='loginteacher' element={<LoginTeacher />} />
                    <Route path='loginstudent' element={<LoginStudent />} />
                </Routes>
            </div>}
        </div>
    )
}

export default LoginUser