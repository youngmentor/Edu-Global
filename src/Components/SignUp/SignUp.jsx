import React from 'react'
import { useState } from 'react'
import './SignUp.css'
const SignUp = (props,{handleChange}) => {
  const [focus, setFocus] = useState(false)

  const whenFocus =()=>{
    setFocus(true)
  }
  return (
   <div  className='app'>
     <div className='formwrap'>
            <label className='label'>
             <h3 className='sign-h3'> {props.name}</h3>
              <input  
                 className="input"
                 type={props.type}
                 name={props.name}
                 onChange={handleChange}
                 required={props.required}
                 pattern={props.pattern}
                 onFocus={()=> props.name === "confirmPassword" && setFocus(true)}
                 focus={focus.toString()}
                 onBlur={whenFocus}
              />
              <span className='err'>{props.errMsg}</span>
            </label>
        </div>
   </div>
  )
}

export default SignUp