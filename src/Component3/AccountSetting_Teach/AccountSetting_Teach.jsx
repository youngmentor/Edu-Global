import React from 'react'
import "./AccountSetting_Teach.css"
import { useRef } from 'react'
const AccountSetting_Teach = () => {
  const inputRef=useRef()
  return (
    <div className='UpdateAccountTeach_Main'>
       <div className='accountsetteach_text'>
                <h4>Please Enter a New password and Email</h4>
            </div>
            <input type="text" className='UpdateAccountTeach' ref={inputRef} placeholder="Enter your new Email..." />
            <input type="passowrd" className='UpdateAccountTeach' ref={inputRef} placeholder="Enter your new PassWord..." />
            <button className='UpdateAccounTeacht_Bttn' >Update</button>
    </div>
  )
}

export default AccountSetting_Teach