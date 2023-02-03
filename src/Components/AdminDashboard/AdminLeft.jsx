import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Admin.css'
import { Link } from 'react-router-dom'
const AdminLeft = (props) => {
    const navigate = useNavigate()
    const [toggle, setToggle] = useState(false)
    return (
        <div onClick={() => { navigate(props.click) }} className='AdminNav'>
            {props.icon1}
            <div className='DashDrop_wrap'>
                <h3 onClick={() => { setToggle(!toggle) }}>{props.title}</h3>
                {toggle && <div className='DashDrop'  >
                    <Link>
                        <p to={"/click1"}>{props.text1}</p>
                        {props.text2 && <p to={"/click2"}>{props.text2}</p>}
                        {props.text3 && <p to={"/lick3"}>{props.text3}</p>}
                        {props.text4 && <p to={"/click4"}>{props.text4}</p>}
                    </Link>
                </div>}
            </div>
            {toggle ? <div onClick={() => { setToggle(!toggle) }}>{props.icon3}</div> : <div onClick={() => { setToggle(!toggle) }}>{props.icon2}</div>}
        </div >
    )
}

export default AdminLeft