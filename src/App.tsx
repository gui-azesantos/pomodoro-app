// Modules
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

// Application
import { defaultTheme } from './styles/themes/default'

// Components

import { GlobalStyle } from './styles/global'
import { Router } from './router/Router'
import { CyclesContextProvider } from './context/CyclesContext'

export function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
