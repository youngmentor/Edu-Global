import React, {useContext} from 'react'
import { useEffect } from 'react'
import { ThemeContext } from '../ContextApi/Context'
const Hero = () => {
    const {removeHeader, header}= useContext(ThemeContext)

    useEffect(()=>{
        header && removeHeader()
    }, [])
  return (
    <div>
        welcome to eduglobal
    </div>
  )
}

export default Hero