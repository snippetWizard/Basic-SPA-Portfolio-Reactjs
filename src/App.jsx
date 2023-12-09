import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Themes';


const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%
  overflow-x: hidden;
  `;


function App() {
  return (
    <div className="App">
    <ThemeProvider theme={darkTheme}>
      <Body>
        Portfolio
      </Body>
    </ThemeProvider>
  </div>
  )
}

export default App
