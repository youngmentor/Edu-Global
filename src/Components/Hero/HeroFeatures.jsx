import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Datas}  from './Data'
import './HeroFeatures.css'
const HeroFeatures = () => {
 const navigate = useNavigate()
  const style ={
    flexDirection: "row-reverse",
    backgroundColor: "blue"
  }

  return (
    <div className='MainFeatures'>
      <h1 className='FeaturesHeader' >Features Of Edu-Global</h1>
      <div className='Features'>
      
       {Datas?.map((i)=>
          <div className='Features-Wrapper'>
          <div className='Features-text'>
            <div className='Heading'><h1>{i.bgtxt}</h1></div>
            <div className='paragraph'><p>{i.smtxt}</p></div>
          </div>
          <div className='Admin-img' >
            <img src={i.Img} className="FeaturesImg" />
          </div>
        </div>
       )}
    </div>
    <div className='HeaderbttnDiv'>
           <button className='Herobtt' onClick={() => navigate("signUp")} >Sign Up here</button>
           </div>
    </div>
  )
}

export default HeroFeatures