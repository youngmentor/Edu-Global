import React, { useState } from 'react'
import './Admin.css'

const AdminLeft = (props) => {
    const [toggle, setToggle] = useState(false)
    return (
        <div >          
                <div className='AdminNav'>
                     {props.icon1}
                    <div><h3>{props.title}</h3></div>
                    {toggle ? <div onClick={() => { setToggle(!toggle) }} className="AdminLeftArrowIcon" >
                        {props.icon3}
                    </div> :
                        <div onClick={() => { setToggle(!toggle) }} className="AdminLeftArrowIcon"  >
                            {props.icon2}
                        </div>}
                </div>
                {toggle && <div className='DashDrop'>
                    <p>{props.text1}</p>
                    {props.text2 && <p>{props.text2}</p>}
                    {props.text3 && <p>{props.text3}</p>}
                    {props.text4 && <p>{props.text4}</p>}
                </div>}
            </div>
    )
}

export default AdminLeft