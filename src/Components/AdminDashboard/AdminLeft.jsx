import React, { useState } from 'react'
import { GiCondorEmblem } from 'react-icons/gi'
import { useNavigate, Link } from 'react-router-dom'
import './Admin.css'

const AdminLeft = (props) => {
    // console.log(props)
    const navigate =useNavigate()
    const [toggle, setToggle] = useState(false)
    return (
        <div className='AdminNav'>
            {props.icon1}
            <div className='DashDrop_wrap'>
                <h3 onClick={() => {setToggle(!toggle)}}>{props.title}</h3>
            {toggle && <div className='DashDrop'  >
                <Link className='Dash' to={`${props.click1}`} >{props.text1}</Link>
                {props.text2 && <Link className='Dash' to={`${props.click2}`} style={{display: "block"}}>{props.text2}</Link>}
                {props.text3 && <Link className='Dash'  to={`${props.click3}`} style={{display: "block"}}>{props.text3}</Link>}
                {props.text4 && <Link className='Dash'  to={`${props.click4}`} style={{display: "block"}}>{props.text4}</Link>}
            </div>}
        </div>
            { toggle ? <div onClick={() => { setToggle(!toggle) }}>{props.icon3}</div> : <div onClick={() => { setToggle(!toggle) }}>{props.icon2}</div> }
        </div >
    )
}

export default AdminLeft