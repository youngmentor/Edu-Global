import React, {useContext} from 'react'
import Header from './Components/Header/Header'
import Form from './Components/SignUp/Form'
import Hero from './Components/Hero/Hero'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Login from './Components/Login/Login'
import Admin from './Components/AdminDashboard/Admin'
import './App.css'
const App = () => {
  return (

    <div className='app'>
      <HashRouter>
         <Routes>
            <Route path="/" element={<Hero/>}/>
            <Route path="/signup" element={<Form/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/admin" element={<Admin/>}/>
         </Routes>
      </HashRouter>
    </div>
  )
}

export default App