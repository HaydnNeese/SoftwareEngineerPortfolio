import './App.css';
import Header from './Header/Header';
import { createTheme, colors, ThemeProvider } from '@mui/material';
import WelcomeBody from './WelcomeBody/WelcomeBody';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main:  colors.grey[900],
        light: colors.blueGrey[400],
        dark: colors.blueGrey[200],
        contrastText: colors.grey[50]
      },
      secondary: {
        main: colors.green[600],
        light: colors.green[200],
        dark: colors.green[900],
        contrastText: colors.grey[50]
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Header/>

      <WelcomeBody/>
    </ThemeProvider>
  );
}

export default App;
