import React from 'react'
import "./AccountSetting.css"
import { useRef } from 'react'
const AccountSetting = () => {
  const inputRef = useRef('')

  return (
    <div className='UpdateAccountAdmin_Main'>
      <div className='UpdateAccountAdmin_Main_Wrap'>
        <div className='UpdateAccountAdmin_Main_Wrap1'>
          <div className='accountsetAdmin_text'>
            <h4>Please Enter a New password</h4>
          </div>
          <input type="text" className='UpdateAccountAdmin'  placeholder="Enter your Email..." />
          <input type="passowrd" className='UpdateAccountAdmin'  placeholder="Enter your new PassWord..." />
          <button className='UpdateAccounAdmint_Bttn' >Update</button>
        </div>
        <div className='UpdateAccountAdmin_Main_Wrap2' >
          <h4>Account Login Details</h4>
          <div className='UpdateAccountAdmin' >Email:<p></p> </div>
          <div className='UpdateAccountAdmin' >PassWord: <p></p></div>
          <button className='UpdateAccounAdmint_Bttn2' >Delete Account</button>
        </div>
      </div>
    </div>
  )
}

export default AccountSetting