import { createContext, useContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  const [verifyAlert, setverifyAlert] = useState(false)

  const login_alert = () => {
    setverifyAlert(true)
    setTimeout(() => {
      setverifyAlert(false)
    }, 10000);
  }


  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
}, )
  return (
    <ThemeContext.Provider value={{user, setUser, verifyAlert,  login_alert}} >
      {children}
    </ThemeContext.Provider>
  )
}
