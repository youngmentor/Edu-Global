import React from 'react'
import './Admin.css'

const AdminLeft = (props) => {
    return (
        <div className='AdminLeft' >
            <div className='AdminLeftWrap' >
                <div className='AdminSidebar'>
                    <div className='AdminNav'>
                        {props.icon1}
                        <h3>{props.title}</h3>
                        <div onClick={()=>{}}> {props.icon2}</div>
                    </div>
                    <div className='DashDrop'>
                        <p>{props.text1}</p>
                        {props.text2 && <p>{props.text2}</p>}
                        {props.text3 && <p>{props.text3}</p>}
                        {props.text4 && <p>{props.text4}</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLeft