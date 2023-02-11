import { createContext, useContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {


  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
}, [activeuser])
  return (
    <ThemeContext.Provider value={{user, setUser}} >
      {children}
    </ThemeContext.Provider>
  )
}
