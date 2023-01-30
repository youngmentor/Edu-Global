import React, { useState } from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'

const BurgerMenu = () => (
    <div className='Header-bttn'>
        <button className="Header-bttn1" onClick={() => navigate("signUp")}  >Sign Up+</button>
        <button className='Header-bttn2' onClick={() => navigate("login")}  >Login</button>
    </div>
)

const Header = () => {
    const [toggle, setToggle] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => { 
        setToggle(!toggle)
        setIsOpen(!isOpen)
     };
    // const GiHamburgerMen = (<GiHamburgerMenu fontSize={"30px"} color="#f8f8f8" onClick={handleToggle} />)
    // const FaTime = (<FaTimes fontSize={"30px"} color="#f8f8f8" onClick={handleToggle} />)
    const navigate = useNavigate()
    return (
        <div className='Header-main' >
            <div className='Header'>
                <div className='LogoImg'>
                <img src="/LOGO.png" alt="Logo" onClick={() => navigate("/")} className="HeaderLogo" />
                </div>
                <div className='Header-bttn'>
                    <button className="Header-bttn1" onClick={() => navigate("signUp")}  >Sign Up+</button>
                    <button className='Header-bttn2' onClick={() => navigate("login")}  >Login</button>
                </div>
                <div className='Burger'>
                    {toggle ? <GiHamburgerMenu onClick={handleToggle} />: <FaTimes onClick={handleToggle}/>}
                </div>
            </div>
        </div>
    )
}

export default Header