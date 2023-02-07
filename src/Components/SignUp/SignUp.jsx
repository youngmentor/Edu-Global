import React from 'react'
import { useState } from 'react'
import './SignUp.css'
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { MdRemoveRedEye } from "react-icons/md";
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
        {props.name === "password" ? props.view ? <AiOutlineEyeInvisible onClick={() => { props.setView(!props.view) }} className='SignUpeye' /> : <MdRemoveRedEye className='SignUpeye' onClick={() => { props.setView(!props.view) }} /> : null}
   </div>
  )
}

export default SignUp