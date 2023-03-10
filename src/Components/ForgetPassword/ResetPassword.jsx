import React, {useState} from 'react'
import { useRef, useContext,useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import "./ForgetPassword.css"
import axios from 'axios'
import Loading from '../LoadingSpin/Loading'
const ResetPassword = () => {
    // const user = useSelector((state) => state.Commerce.user)
    const navigate = useNavigate()
    const inputRef = useRef('')
    const { id } = useParams()
    const [newPassword, setNewPassword] = useState('');
const [Load, setLoad] = useState(false)
    const ResetPass = async () => {
        console.log("clicked")
        setLoad(true)
        const res = await axios.post(`https://eduglobal.onrender.com/api/admin/resetPassword/${id}`, {newPassword})
        setLoad(false)
        res.status === 201 ? navigate('/loginuser/login') : null
        console.log(res.data)
      }

    return (
        <div className='forget'>
            <div className='resetwrap'>
                <div className='forget_text'>
                <h2>Please Enter a New password</h2>
            </div>
           <form onSubmit={ResetPass} className='forget_text'>
           <input className='forget_input' ref={inputRef} 
           type="password" id="new-password" 
           value={newPassword} 
           placeholder="Enter your new password..." 
           onChange={e => setNewPassword(e.target.value)}  />
            <button className='forget_button pointer' type='submit' >{Load ? <Loading/> : "Submit"}</button>
           </form>
            </div>
        </div>
    )
}

export default ResetPassword
// onClick={() => { ResetPass() }}