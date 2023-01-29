import React from 'react'
import './Why.css'
const Why = () => {
    return (
        <div className='Why-Body'>
            <h1 className='Header' >Why Choose Edu-Global</h1>
            <div className='Why-Main'>
                <div className='Why'>
                    <div className='Why-Wrapper'>
                    <div className='Why-img' >
                            <img src="/Why1.png" className="WhyImg" />
                        </div>
                        <div className='Why-text'>
                            <div className='Heading1'><h1>Management Overview</h1></div>
                            <div className='paragraph'><p>
Edu-Global is a standard-rich school management system for all educational institutes. This school management software is for keeping good track of schools information and management activities in schools, colleges, universities and tuition centre.</p></div>
                        </div>                      
                    </div>
                </div>
                <div className='Why2'>
                    <div className='Why-Wrapper2'>
                        <div className='Why-tex'>
                            <div className='Heading1'><h1>Stress free result compilation</h1></div>
                            <div className='paragraph'><p>With Edu-Global, you can now have a fast and effortless compilation of results of students. All with minimal efforts.</p></div>
                        </div>
                        <div className='Why-img' >
                            <img src="/Why2.png" className="WhyImg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Why