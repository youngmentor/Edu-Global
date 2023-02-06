import React, { useState, useContext, useEffect } from 'react'
import SignUp from './SignUp'
import './SignUp.css'
import { ThemeContext } from '../ContextApi/Context'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
const Form = () => {
  const navigate = useNavigate()
  const { removeHeader, header } = useContext(ThemeContext)
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
  })

  const field = [
    {
      id: 3,
      name: "E-mail",
      type: "email",
      label: "email",
      placeholder: "Email",
      required: true,
      errMsg: "email has to be valid",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      label: "password",
      placeholder: "Password",
      required: true,
      errMsg: `At least 8 characters, min 1 Uppercase 1 Lowercase 1 Number 1 special character`,
      pattern: `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{10,}$`
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "confirmpassword",
      label: "confirmPassword",
      placeholder: "confirmPassword",
      pattern: form.password,
      required: true,
      errMsg: "Password must match!"
    },
  ];
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://edusms.onrender.com/api/admin/sign", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, confirmpassword }),
      });

      if (response.ok) {
       setForm("")
        console.log("Sign up successful");
      } else {
        throw new Error("Sign up failed");
      }
    } catch (error) {
      setError(error.message);
    }
  };


  const handleChange = event => {
    // setForm(
    //   {
    //     ...form, [e.target.name]: e.target.value
    //   }
    // );

    setForm((prevState)=>{
  return {...prevState, name: event.target.value }
    })
  };

  useEffect(() => {
  }, [])
  return (
    <main className="main">
      <div className='SignUp-main' >
        <form onSubmit={handleSubmit} className="formData" >
          <h2 className='form-h1'>Register Your Account</h2>
          {field.map((field) => (
            <SignUp key={field.id} {...field} handleChange={handleChange} form={form[field.name]}  />
          ))}
          <div className='SignUpbtt'> <button type="submit" className='signbttn' onClick={() => navigate("/admin")}  >Sign Up</button></div>
          <h3 className='Already'>Already have an Account  <b className='b1' onClick={() => navigate("/login")}> Login here?</b></h3>
        </form>
        <hr style={{ transform: 'rotate(180deg)', height: '100vh' }} className="verticalSign" />
        <div className='SignUpImage-contain' >
          <h1>Start managing <b className='b'>free</b> now !</h1>
          <img src="/signup1 (1).png"
            alt="siignup"
            className='SignUpImage' />
        </div>
      </div>
    </main>
  )
}

export default Form