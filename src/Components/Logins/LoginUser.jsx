import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './Login/Login'
import LoginStudent from './LoginStudent/LoginStudents'
import LoginTeacher from './LoginTeacher/LoginTeacher'
import './LoginUser.css'
const LoginUser = () => {
    // const navigate = useNavigate()
    // const [toggle, setToggle] = useState(false)
    return (
        <div className='LoginMainPage'>
            <div className='LoginMainPageWrap'>
                <Routes>
                    <Route path="login" element={<Login />} />
                    <Route path='loginteacher' element={<LoginTeacher />} />
                    <Route path='loginstudent' element={<LoginStudent />} />
                </Routes>
            </div>
        </div>
    )
}

export default LoginUser