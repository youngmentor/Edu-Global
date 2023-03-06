import React from 'react'
import { useRef, useContext,useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import "./ForgetPassword.css"
// import axios from 'axios'
const ResetPassword = () => {
    const user = useSelector((state) => state.Commerce.user)
    const navigate = useNavigate()
    const inputRef = useRef('')
    const { id } = useParams()


    const ResetPass = async () => {
        const res = await axios.post(`https://eduglobal.onrender.com/api/admin/resetPassword/${user?._id}`,)
        res.status === 200 ? navigate('/loginuser/login') : null
        console.log(res)
      }

    return (
        <div className='forget'>
            <div className='forget_text'>
                <h2>Please Enter a New password</h2>
            </div>
           <form onSubmit={ResetPass}>
           <input className='forget_input' ref={inputRef} placeholder="Enter your new password..." />
            <button className='forget_button pointer' type='submit' >Submit</button>
           </form>
        </div>
    )
}

export default ResetPassword
// onClick={() => { ResetPass() }}