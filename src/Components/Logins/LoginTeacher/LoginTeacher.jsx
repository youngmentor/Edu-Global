import React, { useState, } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'
import LoginUser from "../LoginUser";
import Loading from "../../LoadingSpin/Loading";
import { addTeacher } from "../../../Redux/Features";
import axios from "axios";
const LoginTeacher = () => {
    const [load, setLoad] = useState(false)
    const navigate = useNavigate()
    const [value, setValue] = useState({
        email: "",
        password: ""
    })
    const field = [
        {
            name: "Email",
            label: "Email",
            placeholder: "Email",
            type: "text"
        },
        {
            name: "password",
            label: "Password",
            placeholder: "Password",
            type: "password"
        },
    ];
    // const [loginData, setLoginData] = useState({});
    const handleChange = (event) => {
        setValue({ ...value, [event.target.name]: event.target.value })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("clicked")
        setLoad(true)
        axios.post(`https://eduglobal.onrender.com/api/teacher/login`, value)
            .then(function (res) {
                localStorage.setItem("res", JSON.stringify(res));
                console.log(res.data)
                console.log(res.data.message)
                res.data.data.email === value.email ? dispatch(addTeacher(res.data.data)) : null
                res.data.data.email === value.email ? navigate('/teacherdash') : null
            })
            .catch(function (error) {
                console.log(error);
                setLoad(false)
            })
    };

    return (
        <main className="Login" >
            <form onSubmit={handleSubmit} className="login-wrap" >
                <div className="LoginForm">
                    < div className="UserLogin">
                        <div className="Teacher" onClick={() => navigate("/loginuser/loginteacher")}>Teacher</div>
                        <div className="Admin" onClick={() => navigate("/loginuser/login")}>Admin</div>
                        <div className="Students" onClick={() => navigate("/loginuser/loginstudent")}   >Student</div>
                    </div>
                    <div className="LoginType">
                        <p>I'M a Teacher</p>
                    </div>
                    {field.map((i) => (
                        <label key={i.name}>
                            <input
                                className="LoginInput"
                                type={i.type}
                                name={i.name}
                                placeholder={i.placeholder}
                                // value={loginData[i.name] || ""}
                                onChange={handleChange}
                            />
                        </label>
                    ))}
                    <p className='forg' onClick={() => navigate("/forgetpassword")} >Forgot Paasword ?</p>
                    <button type="submit" className="Loginbtt" >{load ? <Loading /> : "Login"}</button>
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

export default LoginTeacher;
