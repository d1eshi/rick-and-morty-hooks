// create context to change theme
import React, { useState } from 'react'

const ThemeContext = React.createContext()

export default ThemeContext

export function ThemeContextProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>{children}</ThemeContext.Provider>
  )
}
