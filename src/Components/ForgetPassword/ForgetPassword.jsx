import React from 'react'
import "./ForgetPassword.css"
import { useRef } from 'react'
import { MdOutlineArrowBack } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
const ForgetPassword = () => {

    const inputRef = useRef('')
    const navigate = useNavigate()

    return (
        <div className='forget'>
            <div className='forget_text'>
                <h2>Forgot password?</h2>
                <p>No worries, we’ll send you reset instructions</p>
            </div>
            <input type="email" className='forget_input' ref={inputRef} placeholder="Enter your email..." />
            <button className='forget_button pointer' onClick={() => navigate("/forgetpassword")}  >Reset password</button>
            <div className='forget_back pointer' onClick={() => { navigate('/login') }} ><MdOutlineArrowBack fontSize={20} /><p>Back to login</p></div>
        </div>
    )
}

export default ForgetPassword