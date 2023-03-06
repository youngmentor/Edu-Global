import React from 'react'
import { useRef, useContext,useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import "./ForgetPassword.css"
// import axios from 'axios'
const ResetPassword3 = () => {

    const navigate = useNavigate()
    const inputRef = useRef('')
    const { id } = useParams()


    // const ResetPass = async () => {
    //     const res = await axios.post(``, { password: inputRef.current.value })
    //     res.status === 200 ? navigate('/login') : null
    //     console.log(res)
    //   }

    return (
        <div className='forget'>
            <div className='forget_text'>
                <h2>Please Enter a New password</h2>
            </div>
            <input className='forget_input' ref={inputRef} placeholder="Enter your new password..." />
            <button className='forget_button pointer' >Input a New password</button>
        </div>
    )
}

export default ResetPassword3
// onClick={() => { ResetPass() }}