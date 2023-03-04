import React from 'react'
import "./AccountSetting_Teach.css"
import { useRef } from 'react'
const AccountSetting_Teach = () => {
  const inputRef = useRef()
  return (
    <div className='UpdateAccountTeach_Main'>
      <div className='UpdateAccountTeach_Main_Wrap'>
        <div className='UpdateAccountTeach_Main_Wrap1'>
          <div className='accountsetteach_text'>
            <h4>Update Account Details</h4>
          </div>
          <input type="text" className='UpdateAccountTeach' ref={inputRef} placeholder="Enter your new Email..." />
          <input type="passowrd" className='UpdateAccountTeach' ref={inputRef} placeholder="Enter your new PassWord..." />
          <button className='UpdateAccounTeacht_Bttn' >Update</button>
        </div>
        <div className='UpdateAccountTeach_Main_Wrap2' >
          <h4>Account Login Details</h4>
          <div className='UpdateAccountTeach' >Email:<p></p> </div>
          <div className='UpdateAccountTeach' >PassWord: <p></p></div>
          <button className='UpdateAccounTeacht_Bttn2' >Delete Account</button>
        </div>
      </div>
    </div>
  )
}
export default AccountSetting_Teach