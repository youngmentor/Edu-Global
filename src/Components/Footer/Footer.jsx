import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='Footer-Main'>
        <div className='FooterHead'>
            <p>our user Estimate:</p>
            <h3>Over 20k + Schools use our Products</h3>
        </div>
        <div className='FooterPartners'>
            <h4>Our partners:</h4>
           <div className='FooterImgDiv'>
           <img src="/Kora.png" alt="partners" className='Kora-Img'/>
           <img src="/TheCurve.png" alt="partners" className='Kora-Img'/>
           </div>
        </div>
        <div className='FooterContact'>
            <h4>Contact Us:</h4>
            <p>Email: Olaleresuliton43@gmail.com</p>
            <p>Tel: +2347058290856</p>
            <p>Address: No 15 ezeagu street</p>
        </div>
    </div>
  )
}

export default Footer