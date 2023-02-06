import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
const LoginUser = () => {
    return (
        <div>
            < div className="UserLogin">
                <NavLink className="Teacher" to="/loginteacher"  >Teacher</NavLink>
                <NavLink className="Admin" to="/login"    >Admin</NavLink>
                <NavLink className="Students" to="/loginstudent"    >Student</NavLink>
            </div>
        </div>
    )
}

export default LoginUser