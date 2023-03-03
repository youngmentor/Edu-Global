import React, { useState, useContext, useEffect } from 'react'
import SignUp from './SignUp'
// import Verify from './Verify';
import './SignUp.css'
import { useNavigate } from 'react-router-dom'
import Loading from '../LoadingSpin/Loading'
import axios from 'axios'
import { ThemeContext } from '../ContextApi/Context';

const Form = () => {
  const { login_alert } = useContext(ThemeContext)
  const navigate = useNavigate()
  const [view, setView] = useState(false)
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [load, setLoad] = useState(false)
  const field = [
    {
      id: 1,
      name: "email",
      type: "email",
      label: "email",
      placeholder: "Email",
      required: true,
      errMsg: "email has to be valid",
    },
    {
      id: 2,
      name: "password",
      type:  "password" ,
      label: "password",
      placeholder: "Password",
      required: true,
      errMsg: `At least 8 characters, min 1 Uppercase 1 Lowercase 1 Number 1 special character`,
      pattern: `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{10,}$`
    },
    {
      id: 3,
      name: "confirmPassword",
      type: view ? "text" : "password",
      label: "confirmPassword",
      placeholder: "Confirm Password",
      pattern: form.password,
      required: true,
      errMsg: "Password must match!"
    },
  ];
  const handleSubmit = async (event) => {
    setLoad(true)
    try {
      event.preventDefault();
      console.log("clicked")
      const response = await axios.post("https://eduglobal.onrender.com/api/admin/sign", form);
      console.log(response.data)
      console.log(response.data.message);
      response.status === 200 ? navigate("/loginuser/login") : null  
      login_alert()
    } catch (error) {
      console.log("error")
    }

  };

  const handleChange = event => {
    setForm((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value }
    })
  };
  useEffect(() => {

  }, [form])
  return (
    <main className="main">
      
        <div className='SignUp-main' >
          <form className="formData" onSubmit={handleSubmit}  >
            <img src="/NewLogo1.png" alt="logo" className='SignUp_Logo' onClick={() => navigate("/")} />
            {field.map((field) => (
              <SignUp key={field.id} {...field} handleChange={handleChange} form={form[field.name]} setView={setView} view={view} />
            ))}
            {/* <p className='forg' onClick={() => navigate("/forgetpassword")}  >Forgot Paasword ?</p> */}
            <button type="submit" className='signbttn' >{load ? <Loading /> :"Sign Up"}</button>
            <p className='Already'>Already have an Account  <b className='b1' onClick={() => navigate("/loginuser/login")}> Login here?</b></p>
          </form>
          <hr style={{ transform: 'rotate(180deg)', height: '100vh' }} className="verticalSign" />
          <div className='SignUpImage-contain' >
            <h1>Start <b className='SignUpText'> managing</b> your school Activity <b className='SignUpText' >now !</b></h1>
            <img src="/signup1 (1).png"
              alt="siignup"
              className='SignUpImage' />
          </div>
        </div>   
    </main>
  )
}

export default Form