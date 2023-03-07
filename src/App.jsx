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
import ForgetPassword2 from './Components/ForgetPassword/ForgetPassword2'
import ForgetPassword3 from './Components/ForgetPassword/ForgetPassword3'
import ResetPassword from './Components/ForgetPassword/ResetPassword'
import ResetPassword2 from './Components/ForgetPassword/ResetPassword2'
import ResetPassword3 from './Components/ForgetPassword/ResetPassword3'
import Verify from './Components/SignUp/Verify'
import ReportCard_Stu from './Component3/AllStudents/ReportCard_Stu'

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
          <Route path='/teacherdash/*' element={<Teachers_Dashb />} />
          <Route path='/forgetpassword' element={<ForgetPassword />} />
          <Route path='/forgetpassword2' element={<ForgetPassword2 />} />
          <Route path='/forgetpassword3' element={<ForgetPassword3 />} />
          <Route path='/resetpassword/:id/:token' element={<ResetPassword />} />
          <Route path='/resetpassword2/:id/:token' element={<ResetPassword2 />} />
          <Route path='/resetpassword3/:id/:token' element={<ResetPassword3 />} />
          <Route path='/verify/:id' element={<Verify />} />
          <Route path='/reportcardstudent/:id' element={<ReportCard_Stu/>}/>
        </Routes>
      </ HashRouter>
    </div>
  )
}

export default App