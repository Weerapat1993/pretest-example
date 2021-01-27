import { ThemeProvider } from 'styled-components'
import './App.css';
import { GlobalStyle } from './styles/GlobalStyle';
import { Routes } from './Routes';
import { theme } from './config/theme'


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App;
