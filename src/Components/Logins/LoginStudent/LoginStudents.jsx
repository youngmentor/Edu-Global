import React, { useState, } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'
import LoginUser from "../LoginUser";
import axios from "axios";
import { addStudent, addUser } from "../../../Redux/Features";
import { useDispatch } from "react-redux";
import Loading from "../../LoadingSpin/Loading";
const LoginStudent = () => {
    const [load, setLoad] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [value, setValue] = useState({
        email: "",
        password: ""
    })
    const field = [
        {
            name: "email",
            label: "Email",
            placeholder: "Email",
            type: "text",
            required: true
        },
        {
            name: "password",
            label: "Password",
            placeholder: "Password",
            type: "password",
            required: true
        },
    ];
    // const [loginData, setLoginData] = useState({});
    const handleChange = (event) => {
        setValue({ ...value, [event.target.name]: event.target.value })
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("clicked")
        setLoad(true)
        await axios.post(`https://eduglobal.onrender.com/api/student/login`, value)
        
        .then(function(res){
            console.log(res.data)
                console.log(res.data.message)
                res.data.data.email === value.email ? dispatch(addStudent(res.data.data)) : null
                res.data.data.email === value.email ? navigate('/studentdash') : null
        })
        .catch(function(error){
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
                   <p>I'M a Student</p>
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

export default LoginStudent;
