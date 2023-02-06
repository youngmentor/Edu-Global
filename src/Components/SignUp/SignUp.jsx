import React from 'react'
import { useState } from 'react'
import './SignUp.css'
const SignUp = (props) => {
  const [focus, setFocus] = useState(false)
  const {handleChange} = props

  const whenFocus =()=>{
    setFocus(true)
  }
  return (
   <div  className='app'>
     <div className='formwrap'>
            <label className='label'>
              <input  
                 className="input"
                 type={props.type}
                 name={props.name}
                 placeholder={props.placeholder}
                 onChange={handleChange}
                 required={props.required}
                 pattern={props.pattern}
                 focus={focus.toString()}
                 onBlur={whenFocus}
                 onFocus={()=> props.name === "confirmPassword" && setFocus(true)}
              />
              <span className='err'>{props.errMsg}</span>
            </label>
        </div>
   </div>
  )
}

export default SignUp