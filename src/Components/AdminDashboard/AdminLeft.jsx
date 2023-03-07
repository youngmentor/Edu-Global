import React, { useState } from 'react'
import { GiCondorEmblem } from 'react-icons/gi'
import { useNavigate, NavLink } from 'react-router-dom'
import './Admin.css'

const AdminLeft = (props) => {
    // console.log(props)
    const navigate = useNavigate()
    const [toggle, setToggle] = useState(false)

    const colorObject = {
        textDecoration: 'none',
        color: 'inherit',
    }
    const activeColorObject = {
        textDecoration: 'none',
        color: 'blue',
    }

    return (
        <div className='AdminNavMain'>
            {/* <div className='AdminNavMainWrap'> */}
                <div className='DashDrop_wrap'>
                    <div className='AdminNav'>
                        {props.icon1}
                        <h4 onClick={() => { setToggle(!toggle) }}>{props.title}</h4>
                        {toggle ? <div onClick={() => { setToggle(!toggle) }}>{props.icon3}</div> : <div onClick={() => { setToggle(!toggle) }}>{props.icon2}</div>}
                    </div>
                    {toggle && 
                    <div className='DashDrop'   >
                        <NavLink className='Dash' to={`${props.click1}`} style={({ isActive }) => isActive ? activeColorObject : colorObject} >{props.text1}</NavLink>
                        {props.text2 && <NavLink className='Dash' to={`${props.click2}`}  style={({ isActive }) => isActive ? activeColorObject : colorObject} >{props.text2}</NavLink>}
                        {props.text3 && <NavLink className='Dash' to={`${props.click3}`} style={{ display: "block" }}>{props.text3}</NavLink>}
                        {props.text4 && <NavLink className='Dash' to={`${props.click4}`} style={{ display: "block" }}>{props.text4}</NavLink>}
                    </div>}
                    
                </div>   
            {/* </div> */}
        </div >
    )
}

export default AdminLeft