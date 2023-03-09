import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./AccountSetting.css"
import { useRef } from 'react'
import { useSelector } from 'react-redux'
const AccountSetting = () => {
  const user = useSelector((state) => state.Commerce.user)
  const [allAdmin, setAllAdmin] = useState([])
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const getAdmin = async (e) => {
    const res = await axios.get(`https://eduglobal.onrender.com/api/admin/Admin/${user?._id}`)
    setAllAdmin(res.data.data)
    // console.log(res.data.data)
  };
  const AllAdmin = { ...allAdmin }
  useEffect(() => {
    getAdmin()
  }, [])
  return (
    <div className='UpdateAccountAdmin_Main'>
      <div className='UpdateAccountAdmin_Main_Wrap'>
        <div className='UpdateAccountAdmin_Main_Wrap1'>
          <div className='accountsetAdmin_text'>
            <h4>Please Enter a New password</h4>
          </div>
          <input type="text" className='UpdateAccountAdmin' placeholder="Enter your Email..." />
          <div>
            <label htmlFor="newPassword">New Password:</label>
            <input
              className='UpdateAccountAdmin'
              placeholder='New Password'
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              className='UpdateAccountAdmin'
              placeholder='Confirm New Password'
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </div>
          <button className='UpdateAccounAdmint_Bttn' >Update</button>
        </div>
        <div className='UpdateAccountAdmin_Main_Wrap2' >
          <h4>Account Login Details</h4>
          <div className='UpdateAccountAdmin' >Email:<p>{AllAdmin.email}</p> </div>
          <div className='UpdateAccountAdmin' >PassWord: <p>*******</p></div>
          <button className='UpdateAccounAdmint_Bttn2' >Delete Account</button>
        </div>
      </div>
    </div>
  )
}

export default AccountSetting