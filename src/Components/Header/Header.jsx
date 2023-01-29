import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate = useNavigate()
    return (
        <div className='Header-main' >
            <div className='Header'>
                <img src="" alt="Logo"  onClick={()=> navigate("/")}  />
                <div className='Header-bttn'>
                    <button className="Header-bttn1" onClick={()=> navigate("signUp")}  >Sign Up+</button>
                    <button className='Header-bttn2' onClick={()=> navigate("login")}  >Login</button>
                </div>
            </div>
        </div>
    )
}

export default Header