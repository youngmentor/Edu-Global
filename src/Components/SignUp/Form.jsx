import React, {useState, useContext, useEffect} from 'react'
import SignUp from './SignUp'
import './SignUp.css'
import { ThemeContext } from '../ContextApi/Context'
// import { useNavigate } from 'react-router-dom'
const Form = () => {
    const {removeHeader, header} = useContext(ThemeContext)
  const [data, setData] = useState({
    name: "",
    email: "",
    address:"",
    password: "",
    confirmPassword: "",
  })
 
  const field = [
    // {
    //   id: 1,
    //   name: "Name",
    //   type: "text",
    //   label: "name",
    //   required: true,
    //   errMsg: "must be atleast three letter, number and special character not included",
    //   pattern: `[a-zA-Z][a-zA-Z0-9-_. ]{3,20}`
    // },
    // {
    //   id: 2,
    //   name: "address",
    //   type: "text",
    //   label: "address",
    // },
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
      name: "Password",
      type: "password",
      label: "password",
      placeholder: "Password",
      required: true,
      errMsg: `At least 8 characters, min 1 Uppercase 1 Lowercase 1 Number 1 special character`,
      pattern: `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$`
    },
    {
      id: 5,
      name: "Confirm Password",
      type: "password",
      label: "confirmPassword",
      placeholder: "confirmPassword",
      pattern: data.password,
      required: true,
      errMsg: "Password must match!"
    },
  ];
  const handleSubmit = event => {
    event.preventDefault();
    console.log(data)
  };
  const handleChange = event => {
    setData(
      {
        ...data, [event.target.name]: event.target.value
      }
    );
  };

  useEffect(()=>{
    // !header && removeHeader
  }, [])
  return (
     <main className="main">
   <div className='SignUp-main' >
   <form onSubmit={handleSubmit} className="formData" >
      <h2 className='form-h1'>Register Your Account</h2>
      {field.map((field) => (
        <SignUp key={field.id} {...field} handleChange={handleChange} data={data[field.name]}/>
      ))}
     <div className='SignUpbtt'> <button type="submit" className='signbttn'>Sign Up</button></div>
      <h3 className='Already'>Already have an Account</h3>
    </form>
    <hr style={{transform: 'rotate(180deg)', height: '100vh'}} className="verticalSign" />
     <div className='SignUpImage-contain' >
        <h1>Start managing <b className='b'>free</b> now !</h1>
     <img src="/signup1 (1).png"
      alt="siignup" 
      className='SignUpImage'/>
     </div>
   </div>
  </main>
  )
}

export default Form