import React, { useState, useContext, useEffect } from 'react'
import SignUp from './SignUp'
import './SignUp.css'
import { ThemeContext } from '../ContextApi/Context'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
const Form = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState([])
  const [view, setView] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("")
  const {email, password} = form
  const field = [
    {
      id: 3,
      name: "email",
      type: "email",
      label: "email",
      placeholder: "Email",
      required: true,
      errMsg: "email has to be valid",
    },
    {
      id: 4,
      name: "password",
      type:  view ? "text" : "Password",
      label: "password",
      placeholder: "Password",
      required: true,
      errMsg: `At least 8 characters, min 1 Uppercase 1 Lowercase 1 Number 1 special character`,
      pattern: `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{10,}$`
    },
    {
      id: 5,
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
    
    try {
      event.preventDefault();
     
    
    console.log("clicked")
      const response = await axios.post("https://edusms.onrender.com/api/admin/sign", {email: email, password:  password});
      console.log(response).data;
      // console.log(email, password);
    } catch (error) {
      setError(error.message);
    }
  };


  const handleChange = event => {

    setForm((prevState)=>{
  return {...prevState, [event.target.name]: event.target.value }
    })
    // console.log(form)
  };


  useEffect(() => {
   
  }, [form])
  return (
    <main className="main">
      <div className='SignUp-main' >
        <form  className="formData" >
          <h2 className='form-h1'>Register Your Account</h2>
          {field.map((field) => (
            <SignUp key={field.id} {...field} handleChange={handleChange} form={form[field.name]}  setView={setView} view={view}  />
          ))}
          <button type="submit" className='signbttn' onClick={handleSubmit}>Sign Up</button>
          <p className='Already'>Already have an Account  <b className='b1' onClick={() => navigate("/login")}> Login here?</b></p>
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
// onClick={() => navigate("/admin")} 