import React from 'react'
import { Datas}  from './Data'
import './HeroFeatures.css'
const HeroFeatures = () => {

  const style ={
    flexDirection: "row-reverse",
    backgroundColor: "blue"
  }

  return (
    <div className='Features'>
       {Datas?.map((i)=>
          <div className='Features-Wrapper'>
          <div className='Admin-img' >
            <img src={i.Img} className="FeaturesImg" />
          </div>
          <div className='Features-text'>
            <div className='Heading'><h1>{i.bgtxt}</h1></div>
            <div className='paragraph'><p>{i.smtxt}</p></div>
          </div>
        </div>
       )}
    </div>
  )
}

export default HeroFeatures