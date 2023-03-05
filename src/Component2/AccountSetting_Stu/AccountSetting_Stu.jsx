import React,{useState} from 'react'
import "./AccountSetting_Stu.css"
import { useRef } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
const AccountSetting_Stu = () => {
  const student = useSelector((state) => state.Commerce.student)
  const [onestudent, setOneStudent] = useState()

  const getStudent = () => {
    axios.get(`https://eduglobal.onrender.com/api/admin/Student/${student._id}`)
        .then(res => { setOneStudent(res.data.data) })

}
const onestudentdata = { ...onestudent }
useEffect(() => {
    getStudent()
}, [])

  return (
    <div className='UpdateAccountStu_Main'>
      <div className='UpdateAccountStu_Main_Wrap'>
        <div className='UpdateAccountStu_Main_Wrap1'>
          <div className='accountsetStu_text'>
            <h4>Please Enter a New password</h4>
          </div> 
          <input type="text" className='UpdateAccountStu'  placeholder="Enter your Email..." />
          <input type="passowrd" className='UpdateAccountStu'  placeholder="Enter your new PassWord..." />
          <button className='UpdateAccounStut_Bttn' >Update</button>
        </div>
        <div className='UpdateAccountStu_Main_Wrap2' >
          <h4>Account Login Details</h4>
          <div className='UpdateAccountStu' >Email:  <p>{onestudentdata.email}</p> </div>
          <div className='UpdateAccountStu' >PassWord: <p></p></div>
          <button className='UpdateAccounStut_Bttn2' >Delete Account</button>
        </div>
      </div>
    </div>
  )
}

export default AccountSetting_Stu