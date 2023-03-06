import React from 'react'
import { useRef, useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import "./ForgetPassword.css"
// import axios from 'axios'
const ResetPassword2 = () => {
    const student = useSelector((state) => state.Commerce.student)
    const navigate = useNavigate()
    const inputRef = useRef('')
    const { id } = useParams()


    const ResetPass = async () => {
        console.log(id)
        const res = await axios.post(`https://eduglobal.onrender.com/api/student/resetPassword/${id}`,)
        res.status === 200 ? navigate('/loginuser/login') : null
        console.log(res)
    }

    return (
        <div className='forget'>
            <div className='forget_text'>
                <h2>Please Enter a New password</h2>
            </div>
            <form onSubmit={ResetPass} className='forget_text'>
                <input className='forget_input' placeholder="Enter your new password..." />
                <button className='forget_button pointer' type='submit' >ISubmit</button>
            </form>
        </div>
    )
}

export default ResetPassword2
// onClick={() => { ResetPass() }}