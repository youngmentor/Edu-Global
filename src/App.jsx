import React, {useContext} from 'react'
import Header from './Components/Header/Header'
// import SignUp from './Components/SignUp/SignUp'
import Form from './Components/SignUp/Form'
import Hero from './Components/Hero/Hero'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeContext } from './Components/ContextApi/Context'
const App = () => {
    const {removeHeader, header} = useContext(ThemeContext)
    
  return (
    <div>
       <BrowserRouter>
      {!header ?  <Header/> :null}
         <Routes>
            <Route path="/" element={<Hero/>}/>
            <Route path="signup" element={<Form/>} />
         </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App