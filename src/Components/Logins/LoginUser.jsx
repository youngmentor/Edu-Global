import React from 'react'
import Login from './Login/Login'
import LoginStudent from './LoginStudent/LoginStudents'
import LoginTeacher from './LoginTeacher/LoginTeacher'
const LoginUser = () => {

    const [toggle, setToggle] = useState(false)
    return (
        <div>
            <div>
                <Login />
                <LoginStudent />
                <LoginTeacher />
            </div>
        </div>
    )
}

export default LoginUser