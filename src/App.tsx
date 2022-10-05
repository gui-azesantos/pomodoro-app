// Modules
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

// Application
import { defaultTheme } from './styles/themes/default'

// Components
import { Button } from './components/Button'
import { GlobalStyle } from './styles/global'

export function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <div>
        <Button variant="success" />
        <Button variant="secondary" />
        <Button variant="secondary" />
        <Button variant="danger" />
        <Button />
      </div>
    </ThemeProvider>
  )
}
