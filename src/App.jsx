import React, {useContext} from 'react'
import Header from './Components/Header/Header'
import Form from './Components/SignUp/Form'
import Hero from './Components/Hero/Hero'
import { Routes, Route, HashRouter, BrowserRouter } from 'react-router-dom'
import Login from './Components/Login/Login'
import Admin from './Components/AdminDashboard/Admin'
// import Teachers from './Components/TeacherDashboard/Teacher'
// import Student from './Components/StudentDashboard/Student'
import './App.css'  
const App = () => {
  return (

    <div className='app'>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Hero/>}/>
            <Route path="/signup" element={<Form/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/admin/*" element={<Admin/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App