import React,{useState} from 'react'
import ThemeContext from './ThemeContext'


const ThemeProvider = ({children}) => {
    const[theme, setTheme]= useState({
        background:'black',
        text:'white' //red
    })
  return (
    <ThemeContext.Provider value={theme}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider