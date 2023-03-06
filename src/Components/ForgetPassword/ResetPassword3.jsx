import React from 'react'
import { useRef, useContext,useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import "./ForgetPassword.css"
// import axios from 'axios'
const ResetPassword3 = () => {
    const teacher = useSelector((state) => state.Commerce.teacher)
    const navigate = useNavigate()
    const inputRef = useRef('')
    const { id } = useParams()


    const ResetPass = async () => {
        const res = await axios.post(`https://eduglobal.onrender.com/api/teacher/resetPassword/${teacher?._id}`, )
        res.status === 200 ? navigate('/login') : null
        console.log(res)
      }

    return (
        <div className='forget'>
            <div className='forget_text'>
                <h2>Please Enter a New password</h2>
            </div>
            <form onSubmit={ResetPass}>
            <input className='forget_input' placeholder="Enter your new password..." />
            <button className='forget_button pointer' type='submit' >Submit</button>
            </form>
        </div>
    )
}

export default ResetPassword3
// onClick={() => { ResetPass() }}