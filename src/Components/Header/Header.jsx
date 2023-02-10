import React, { useState } from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'

const Header = () => {
    const [toggle, setToggle] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle)
        setIsOpen(!isOpen)
    };

    const navigate = useNavigate()

    return (
        <div className='Header-main' >
            <div className='Header'>
                <div className='LogoImg'>
                    <img src="/NewLogo1.png" alt="Logo" onClick={() => navigate("/")} className="HeaderLogo" />
                </div>
                <div className='Header-bttn'>
                    <button className="Header-bttn1" onClick={() => navigate("signUp")}  >Sign Up+</button>
                    <button className='Header-bttn2' onClick={() => navigate("loginuser/login")}  >Login</button>
                </div>
                {isOpen && (
                    <div className='Header-btt'>
                        <p className="Header-btt1" onClick={() => navigate("signUp")}  >Sign Up+</p>
                        <p className='Header-btt2' onClick={() => navigate("loginuser/login")}  >Login</p>
                    </div>
                )}
                <div className='Burger'>
                    {toggle ? <GiHamburgerMenu onClick={handleToggle} /> : <FaTimes onClick={handleToggle} />}
                </div>
            </div>
        </div>
    )
}

export default Header