import React, { useState } from 'react'
import './Admin.css'

const AdminLeft = (props) => {
    const [toggle, setToggle] = useState(false)
    return (
        <div >
            <div className='AdminLeftWrap' >
                <div className='AdminSidebar'>
                    <div className='AdminNav'>
                       <div> {props.icon1}</div>
                        <h3>{props.title}</h3>
                        {toggle ? <div onClick={() => { setToggle(!toggle) }} className="AdminLeftArrowIcon" >{props.icon3}</div> : <div onClick={() => { setToggle(!toggle) }} className="AdminLeftArrowIcon"  >{props.icon2}</div>}

                    </div>
                    {toggle && <div className='DashDrop'>
                        <p>{props.text1}</p>
                        {props.text2 && <p>{props.text2}</p>}
                        {props.text3 && <p>{props.text3}</p>}
                        {props.text4 && <p>{props.text4}</p>}
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default AdminLeft