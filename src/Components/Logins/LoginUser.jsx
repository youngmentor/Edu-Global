import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './Login/Login'
import LoginStudent from './LoginStudent/LoginStudents'
import LoginTeacher from './LoginTeacher/LoginTeacher'
import './LoginUser.css'
const LoginUser = () => {
    const navigate = useNavigate()
    // const [toggle, setToggle] = useState(false)
    return (
        <div className=''>
            {/* <h1>click the button to login</h1> */}
            {/* <div className="UserLogin">
                <div className="Teacher" onClick={() => navigate("/loginuser/loginteacher")}>Teacher</div>
                <div className="Admin" onClick={() => navigate("/loginuser/login")}>Admin</div>
                <div className="Students" onClick={() => navigate("/loginuser/loginstudent")}   >Student</div>
            </div> */}
            <div>
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