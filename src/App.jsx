import React, { useContext } from 'react'
// import Header from './Components/Header/Header'
import Form from './Components/SignUp/Form'
import Hero from './Components/Hero/Hero'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Admin from './Components/AdminDashboard/Admin'
import LoginStudent from './Components/Logins/LoginStudent/LoginStudents'
import LoginTeacher from './Components/Logins/LoginTeacher/LoginTeacher'
import './App.css'
import LoginUser from './Components/Logins/LoginUser'
import StudentsDash from './Component2/StudentDashboard/StudentsDash'
import Teachers_Dashb from './Component3/TeacherDashboard/Teachers_Dashb'
import ForgetPassword from './Components/ForgetPassword/ForgetPassword'
import ResetPassword from './Components/ForgetPassword/ResetPassword'
import Verify from './Components/SignUp/Verify'
import AccountSetting from './Components/AccountSetting/AccountSetting'
// import AccountSetting_Teach from './Component3/AccountSetting_Teach/AccountSetting_Teach'
const App = () => {
  return (
    <div className='app'>
      < HashRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signup" element={<Form />} />
          <Route path="/loginuser/*" element={<LoginUser />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/loginteacher" element={<LoginTeacher />} />
          <Route path="/loginstudent" element={<LoginStudent />} />
          <Route path='/studentdash/*' element={<StudentsDash />} />
          <Route path='teacherdash/*' element={<Teachers_Dashb />} />
          <Route path='/forgetpassword' element={<ForgetPassword />} />
          <Route path='/resetpassword' element={<ResetPassword />} />
          <Route path='/verify/:id' element={<Verify />} />
          <Route path="/accountsetadmin" element={<AccountSetting/>}/>
          {/* <Route path="/accountsetteach" element={<AccountSetting_Teach/>}/> */}
        </Routes>
      </ HashRouter>
    </div>
  )
}

export default App