import React, { useContext } from 'react'
import { useEffect } from 'react'
import { ThemeContext } from '../ContextApi/Context'
import Student from "./Images/student2.png"
import HeroFeatures from './HeroFeatures'
import "./Hero.css"
const Hero = () => {
  const { removeHeader, header } = useContext(ThemeContext)

  useEffect(() => {
    header && removeHeader()
  }, [])
  return (
    <div className='HeroMain'>
     <div className='HeroWrap'>
     <div className='Hero'>
        <div className='HeroRight' >
          <h1>A Better Platform For<br/> Management Of School Records<br/> And Data system </h1>
          <p>Now management of your school, college <br/>or any educational base activities is 100% <br/>efficient and reliable</p>
          <button className='Herobtt' >Get Started</button>
        </div>
        <div className='HeroLeft'>
          <img src={Student} alt="student" className='studentImg' />
        </div>
      </div>
      </div>  
      <HeroFeatures/>
    </div>
  )
}

export default Hero