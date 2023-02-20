import React from 'react'
import "./ForgetPassword.css"
import { useRef } from 'react'
import { MdOutlineArrowBack } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// import axios from 'axios';
const ForgetPassword = () => {
    // const inputRef = useRef('')

    const navigate = useNavigate()
  

    return (
        <div className='forget'>
            <div className='forget_text'>
                <h2>Forgot password?</h2>
                {/* <p>No worries, we’ll send you reset instructions</p> */}
            </div>
            <input type="email" className='forget_input' placeholder="Please Enter your email..." />
            <button className='forget_button pointer' onClick={() => { navigate('/resetpassword') }}  >Reset password</button>
            {/* <div className='forget_back pointer' onClick={() => { navigate('/loginuser/login') }} ><MdOutlineArrowBack fontSize={20} /><p>Back to login</p></div> */}
        </div>
    )
}

export default ForgetPassword
// onClick={() => { forget() }}

  // const forget = () => {
    //     const Email = { email: inputRef.current.value }
    //     console.log(Email.email)
    //     axios.post("", Email)
    //       .then((res) => {
    //         console.log(res)
    //       }).catch((e) => {
    //         console.log(e)
    //       })
    //   }