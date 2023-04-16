import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import { createTheme, colors, ThemeProvider } from '@mui/material';

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
        main: colors.grey[200],
        light: colors.grey[50],
        dark: colors.grey[600],
        contrastText: colors.blueGrey[800]
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Header/>

      <Home/>
    </ThemeProvider>
  );
}

export default App;
