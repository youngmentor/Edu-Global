import React, { useState, } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import './Login.css'
import axios from 'axios';
import Loading from "../../LoadingSpin/Loading";
const Login = () => {

    const [pro, setPro] = useState(false)
    const navigate = useNavigate()
    const [value, setValue] = useState({
        email: "",
        password: ""
    })
    const [load, setLoad] = useState(false)
    const field = [
        {
            id: 1,
            name: "email",
            label: "email",
            placeholder: "Email",
            type: "text",
            err: "input a valid email",
            required: true

        },
        {
            id: 2,
            name: "password",
            label: "Password",
            placeholder: "Password",
            type: "password",
            err: "forget password",
            required: true
        },
    ]


    const [focus, setFocus] = useState(false)

    const handleFocus = (e) => {
        setFocus(true)
    }

    const handleLogin = (e) => {
        setLoad(true)
        e.preventDefault();
        axios.post('https://eduglobal.onrender.com/api/admin/login', value)
            .then(function (res) {
                console.log(res)
                console.log(res.data.message)
                res.status === 200 ? navigate('/admin') : rej()
                // setLoad(false)
            })
    }
    const handleChange = (event) => {
        setValue({ ...value, [event.target.name]: event.target.value })
    };


    const rej = () => {
        setPro(true)
        setTimeout(() => {
            setPro(false)
        }, 5000)
    }
    return (
        <main className="Login" >
            {pro && <div className='AdminwelcomeMssg'>
                <div>
                    <h3>Welcome To Admin Dashboard</h3>
                    <p>click <b> here </b> to verify your accout</p>
                </div>
            </div>}
            <form onSubmit={handleLogin} className="login-wrap"   >
                <div className="LoginForm">
                    < div className="UserLogin">
                        <div className="Teacher" onClick={() => navigate("/loginuser/loginteacher")}>Teacher</div>
                        <div className="Admin" onClick={() => navigate("/loginuser/login")}>Admin</div>
                        <div className="Students" onClick={() => navigate("/loginuser/loginstudent")}   >Student</div>
                    </div>
                    <div className="LoginType">
                        <p>I'M an Admin</p>
                    </div>
                    {field.map((i) => (
                        <label key={i.name}>
                            <input
                                className="LoginInput"
                                type={i.type}
                                name={i.name}
                                placeholder={i.placeholder}
                                onChange={handleChange}
                                required={i.required}
                                pattern={i.pattern}
                                onBlur={handleFocus}
                                focused={focus.toString()}
                            />
                            <span className='Login_err'>{i.err}</span>
                        </label>
                    ))}

                    <button type="submit" className="Loginbtt" >{load ? <Loading/>:"Login"}</button>
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

export default Login
