import React, { useContext } from 'react'
import {ThemeContext} from "./ThemeContext"
export const ThemeSwitcher = () => {
const {setTheme, theme} = useContext(ThemeContext)
return(
  <button onClick={() => 
    setTheme(theme === 'light' ? 'dark' : 'light')}>
Theme is currently: {theme}
  </button>
)
}
