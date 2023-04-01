import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
// import Student from "./Images/student2.png"
import HeroFeatures from './HeroFeatures'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Why from './Why'
import Mission from './Mission/Mission'
import "./Hero.css"
const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className='HeroMain'>
       <Header />
      <div className='HeroWrap'>
        <div className='Hero'>
          <div className='HeroRight' >
            <h1>A Better Platform For<br /> Management Of School <br /> Records
              And Data system </h1>
            <p>Now management of your school, college <br />or any educational base activities is 100% <br />efficient and reliable</p>
           <div className='HeaderbttnDiv'>
           <button className='Herobtt' onClick={() => navigate("signUp")} >Get Started</button>
           </div>
          </div>
          <div className='HeroLeft'>
            <img src="/land.jpg" alt="student" className='studentImg' />
          </div>
        </div>
      </div>
      <HeroFeatures />
      <Why/>
      <Mission/>
      <Footer/>
    </div>
  )
}

export default Hero