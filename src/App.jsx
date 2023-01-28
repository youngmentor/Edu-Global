import React, {useContext} from 'react'
import Header from './Components/Header/Header'
// import SignUp from './Components/SignUp/SignUp'
import Form from './Components/SignUp/Form'
import Hero from './Components/Hero/Hero'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import { ThemeContext } from './Components/ContextApi/Context'
const App = () => {
    const {removeHeader, header} = useContext(ThemeContext)
    
  return (
    <div>
      <HashRouter>
      <Header />
         <Routes>
            <Route path="/" element={<Hero/>}/>
            <Route path="signup" element={<Form/>} />
            <Route path="login" element={<Form/>} />
         </Routes>
      </HashRouter>
    </div>
  )
}

export default App