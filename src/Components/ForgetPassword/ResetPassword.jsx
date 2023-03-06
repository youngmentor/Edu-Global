import React from 'react'
import { useRef, useContext,useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import "./ForgetPassword.css"
import axios from 'axios'
const ResetPassword = () => {
    const user = useSelector((state) => state.Commerce.user)
    const navigate = useNavigate()
    const inputRef = useRef('')
    const { id } = useParams()


    const ResetPass = async () => {
        console.log("clicked")
        const res = await axios.post(`https://eduglobal.onrender.com/api/admin/resetPassword/${id}`,)
        res.status === 201 ? navigate('/loginuser/login') : null
        console.log(res)
      }

    return (
        <div className='forget'>
            <div className='resetwrap'>
                <div className='forget_text'>
                <h2>Please Enter a New password</h2>
            </div>
           <form onSubmit={ResetPass} className='forget_text'>
           <input className='forget_input' ref={inputRef} placeholder="Enter your new password..." />
            <button className='forget_button pointer' type='submit' >Submit</button>
           </form>
            </div>
        </div>
    )
}

export default ResetPassword
// onClick={() => { ResetPass() }}