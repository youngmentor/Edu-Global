import React from 'react'
import { useRef, useContext,useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import "./ForgetPassword.css"
// import axios from 'axios'
const ResetPassword = () => {

    const navigate = useNavigate()
    const inputRef = useRef('')
    const { id } = useParams()

    return (
        <div>
            <div className='forget_text'>
                <h2>New password</h2>
            </div>
            <input className='forget_input' ref={inputRef} placeholder="Enter your new password..." />
            <button className='forget_button pointer' >Change password</button>
        </div>
    )
}

export default ResetPassword