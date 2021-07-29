import React, { useContext } from 'react'

import ThemeContext from '../../context/toggleTheme'
import './index.css'

export default function Header() {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext)

  const handleClick = () => {
    setDarkTheme(!darkTheme)
  }

  return (
    <>
      <header>
        <h1>ReactHooks</h1>
        <button type="button" onClick={handleClick}>
          {darkTheme ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
    </>
  )
}
