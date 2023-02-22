import React from 'react'
import "./AccountSetting.css"
const AccountSetting = () => {
  const inputRef = useRef('')

  return (
    <div className='UpdateAccount_Main'>
         <div className='forget_text'>
                <h2>Please Enter a New password</h2>
            </div>
            <input type="text" className='UpdateAccount' ref={inputRef} placeholder="Enter your new Email..." />
            <input type="passowrd" className='UpdateAccount' ref={inputRef} placeholder="Enter your new PassWord..." />
            <button className='UpdateAccount_Bttn' >Update</button>
    </div>
  )
}

export default AccountSetting