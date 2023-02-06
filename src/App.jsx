import React, {useContext} from 'react'
// import Header from './Components/Header/Header'
import Form from './Components/SignUp/Form'
import Hero from './Components/Hero/Hero'
import { Routes, Route, HashRouter} from 'react-router-dom'
import Login from './Components/Logins/Login/Login'
import Admin from './Components/AdminDashboard/Admin'
import LoginStudent from './Components/Logins/LoginStudent/LoginStudents'
import LoginTeacher from './Components/Logins/LoginTeacher/LoginTeacher'
import './App.css'  
const App = () => {
  return (
    <div className='app'>
      < HashRouter>
         <Routes>
            <Route path="/" element={<Hero/>}/>
            <Route path="/signup" element={<Form/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/admin/*" element={<Admin/>}/>
            <Route pathe="/loginteacher" element={<LoginTeacher/>} />
            <Route pathe="/loginstudent" element={<LoginStudent/>} />
         </Routes>
      </ HashRouter>
    </div>
  )
}

export default App