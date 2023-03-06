import React, {useState} from 'react'
import "./ForgetPassword.css"
import { useRef } from 'react'
import { MdOutlineArrowBack } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

import axios from 'axios';

// import axios from 'axios';
const ForgetPassword = () => {
    const [email, setEmail] = useState('')
    const [Load, setLoad] =useState(false)
    const [successMessage, setSuccessMessage] = useState(null);
    const navigate = useNavigate()
    
    const handleForget = async (e) => {
        console.log("clicked")
        e.preventDefault();
        try {
            setLoad(true)
            const response = await axios.post('https://eduglobal.onrender.com/api/admin/forgotPassword', { email });
            setLoad(true)
            // console.log(response.data); 
            setSuccessMessage(response.data.message)
        } catch (error) {
            console.log(error.response.data); 
        }
    };
    return (
        <div className='forget'>
            <form onSubmit={handleForget} className='forget_text' >
                <h2>Forgot password?</h2>             
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='forget_input' placeholder='Email'/>
                    {successMessage && <p>{successMessage}</p>}
                <button type="submit" className='forget_button pointer' >Submit</button>
                <div className='forget_back pointer' onClick={() => { navigate('/loginuser/login') }} ><MdOutlineArrowBack fontSize={20} /><p>Back to login</p></div>
            </form>

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
    // <div className='forget_text'>
    //             <h2>Forgot password?</h2>
    //             {/* <p>No worries, we’ll send you reset instructions</p> */}
    //         </div>
    //         <input type="email" className='forget_input' placeholder="Please Enter your email..." />
    //         <button className='forget_button pointer' onClick={() => { navigate('/resetpassword') }}  >Reset password</button>
    //         <div className='forget_back pointer' onClick={() => { navigate('/loginuser/login') }} ><MdOutlineArrowBack fontSize={20} /><p>Back to login</p></div>