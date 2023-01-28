import {  createContext, useReducer, useEffect, useState } from 'react';
export const ThemeContext = createContext();

export const ThemeProvider=({children})=>{
  const [header, setHeader] = useState(false)

  const removeHeader=()=>{
    setHeader(!header);
    console.log(header)
  }

  useEffect(()=>{
    // localStorage.setItem("header", header)
  },[header])


  return(
    <ThemeContext.Provider value={{header, removeHeader}}>
        {children}
    </ThemeContext.Provider>
  )
}