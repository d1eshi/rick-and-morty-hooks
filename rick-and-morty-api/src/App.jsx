import React from 'react'

import { ThemeContextProvider } from './context/toggleTheme'
import Home from './pages/Home'

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Home />
      </ThemeContextProvider>
    </>
  )
}

export default App
