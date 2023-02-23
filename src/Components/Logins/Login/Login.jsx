import React, { useEffect, useState, useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import './Login.css'
import axios from 'axios';
import Loading from "../../LoadingSpin/Loading";
import { addUser } from "../../../Redux/Features";
import { clearUser } from "../../../Redux/Features";
import { useDispatch, useSelector } from "react-redux";
import { ThemeContext } from "../../ContextApi/Context";
const Login = () => {
    const { verifyAlert, login_alert } = useContext(ThemeContext)

    const dispatch = useDispatch()
    const user = useSelector((state) => state.Commerce.user)
    const navigate = useNavigate()
    const [herr, setHerr] = useState(false)
    const [err, setErr] = useState('')
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
    const logOut = async () => {
        const res = await axios.post(`https://eduglobal.onrender.com/api/admin/logout/${user?._id}`)
        console.log(res.data)
        res.status === 201 ? dispatch(clearUser()) : null
        res.status === 201 ? navigate('/loginuser/login') : null
        login_alert()
    }

    const handleLogin = async(e) => {
        console.log("clicked")
        setLoad(true)
        e.preventDefault();
      await axios.post('https://eduglobal.onrender.com/api/admin/login', value)
            .then(function (res) {
                console.log(res.data)
                console.log(res.data.message)
                res.data.data.email === value.email ? dispatch(addUser(res.data.data)) : null
                setLoad(false)
                if(res.data.data.isVerified === true){
                    res.data.data.email === value.email ? navigate('/admin') : null
                } else{
                    logOut()
                    setLoad(false)
                }
                    
                
            })
            .catch(function (error) {
                console.log(error);
                setErr(error.response.data.message)
                setLoad(false)
            });
    }
    const handleChange = (event) => {
        setValue({ ...value, [event.target.name]: event.target.value })
    };

    useEffect(() => {
        setHerr(true)
        setTimeout(() => {
          setHerr(false)
        }, 5000);
      }, [err])

    return (
        <main className="Login" >
            {verifyAlert && <div className='AdminwelcomeMssg'>
                <div>
                    <p>Please check your Email for a verification link</p>
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

export default Login
