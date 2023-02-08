import React, { useState, } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import './Login.css'
import LoginUser from "../LoginUser";
import axios from 'axios';
const Login = () => {
    const navigate = useNavigate()
    const field = [
        { 
            id: 1,
            name: "Email",
            label: "Email",
            placeholder: "Email",
            type: "text"
        },
        {
            id: 2,
            name: "password",
            label: "Password",
            placeholder: "Password",
            type: "password"
        },
    ];
    const handleLogin = (username, password) => {
        axios.post('https://edusms.onrender.com/api/admin/login', {
          email,
          password
        })
    const [loginData, setLoginData] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(email, password);
    };

    return (
        <main className="Login" >
            <form onSubmit={handleSubmit} className="login-wrap" >
                <div className="LoginForm">
                <LoginUser/>
                    {field.map((i) => (
                        <label key={i.name}>
                            <input
                                className="LoginInput"
                                type={i.type}
                                name={i.name}
                                placeholder={i.placeholder}
                                value={loginData[i.name] || ""}
                                onChange={handleChange}
                            />
                        </label>
                    ))}
                  <NavLink to="/admin" >
                  <button type="submit" className="Loginbtt" >Login</button>
                  </NavLink>
                </div>
                <hr style={{ transform: 'rotate(180deg)', height: '100vh' }} className="verticalSign" />
                <div className="ImageWrap">
                    <div className="login-text">
                        <h1>Start managing now</h1>
                        <p>Stop struggling with common tasks and focus<br />
                            on the real choke points. Discover a full<br />
                            featured & 100% efficient platform.</p>
                    </div>
                    <img src="/login4.png"
                        alt="loginimg"
                        className='LoginImage' />
                </div>
            </form>
        </main>
    );
};
}
export default Login
