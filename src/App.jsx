import React, {useContext} from 'react'
import Header from './Components/Header/Header'
// import SignUp from './Components/SignUp/SignUp'
import Form from './Components/SignUp/Form'
import Hero from './Components/Hero/Hero'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import { ThemeContext } from './Components/ContextApi/Context'
import Login from './Components/Login/Login'
import './App.css'
const App = () => {
  return (

    <div className='app'>
      <HashRouter>
         <Header />
         <Routes>
            <Route path="/" element={<Hero/>}/>
            <Route path="signup" element={<Form/>} />
            <Route path="login" element={<Login/>} />
         </Routes>
      </HashRouter>
    </div>
  )
}

export default App