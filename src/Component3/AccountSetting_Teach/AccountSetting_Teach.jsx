import React,{useState, useEffect} from 'react'
import "./AccountSetting_Teach.css"
import Loading from '../../Components/LoadingSpin/Loading'
import { useRef } from 'react'
const AccountSetting_Teach = () => {
  const teacher = useSelector((state) => state.Commerce.teacher)
  const [oneteacher, setOneTeacher] = useState()
  // const inputRef = useRef()

  const getTeacher = () =>{
  
    axios.get(`https://eduglobal.onrender.com/api/admin/Teacher/${teacher[0]?._id}`)
    
    .then(res=> {
      setOneTeacher(res.data.data)
    })
      .catch((e)=>{
        console.log(e)
      })
  }
 
  useEffect(() => {
    getTeacher()
    // console.log(teacher[0]?._id)

  }, [])
  const oneteacherdata = {...oneteacher}
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
          {oneteacher ? <div className='UpdateAccountTeach' >Email:<p></p> </div> : <Loading/>}
          
          <div className='UpdateAccountTeach' >PassWord: <p></p></div>
          <button className='UpdateAccounTeacht_Bttn2' >Delete Account</button>
        </div>
      </div>
    </div>
  )
}
export default AccountSetting_Teach