import "./App.css";
import { createTheme, colors, ThemeProvider } from "@mui/material";
import { Routes, Route } from 'react-router-dom';
import Header from "./Header/Header";
import LandingPage from "./Pages/LandingPage/LandingPage";
import AboutMe from './Pages/AboutMe/AboutMe';
import LinkSpeedDial from "./LinkSpeedDial/LinkSpeedDial";
import Experience from "./Pages/Experience/Experience";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: colors.grey[900],
        light: colors.blueGrey[400],
        dark: colors.blueGrey[200],
        contrastText: colors.grey[50],
      },
      secondary: {
        main: colors.green[600],
        light: colors.green[200],
        dark: colors.green[900],
        contrastText: colors.grey[50],
      },
    },
  });

  return (
      <ThemeProvider theme={theme}>
        <Header />

        <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
          <Route path="/about" element={<AboutMe />} />
          <Route path="/experience" element={<Experience/>}></Route>
        </Routes>

        <LinkSpeedDial />
      </ThemeProvider>
  );
}

export default App;
