import './App.css'
import { GlobalStyles } from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
    </ThemeProvider>
  )
}

export default App
