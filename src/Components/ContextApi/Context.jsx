import {  createContext, useReducer, useEffect, useState } from 'react';
export const ThemeContext = createContext();

export const ThemeProvider=({children})=>{
  const [header, setHeader] = useState(JSON.parse(localStorage.getItem("header")));


  const removeHeader=()=>{
    setHeader(!header);
  }

  useEffect(()=>{
    localStorage.setItem("header", header)
  },[header])


  return(
    <ThemeContext.Provider value={{header, removeHeader}}>
        {children}
    </ThemeContext.Provider>
  )
}