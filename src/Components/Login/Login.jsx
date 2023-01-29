import React, { useState } from "react";
import './Login.css'
const Login = () => {
    const field = [
        {
            name: "username",
            label: "Username",
            placeholder: "Username",
            type: "text"
        },
        {
            name: "password",
            label: "Password",
            placeholder: "Password",
            type: "password"
        },
    ];

    const [loginData, setLoginData] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <main className="Login" >       
            <form onSubmit={handleSubmit} className="login-wrap" >    
                <div className="LoginForm">                
                <div className="UserLogin">
                <div className="Teacher">Teacher</div>
                <div className="Admin">Admin</div>
                <div className="Students">Student</div>
                </div>
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
                <button type="submit" className="Loginbtt" >Login</button>
                </div>
                <hr style={{transform: 'rotate(180deg)', height: '100vh'}} className="verticalSign" />
                <div className="ImageWrap">  
                  <div className="login-text">
                  <h1>Start managing now</h1>
                 <p>Stop struggling with common tasks and focus<br/>
                  on the real choke points. Discover a full<br/> 
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

export default Login;