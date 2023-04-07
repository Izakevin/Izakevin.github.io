import './App.css';

import Header from './components/Header.js';
import Education from './components/Education.js';
import Skills from './components/Skills.js';
import Contact from './components/Contact';
import AboutMe from './components/About_Me';
import Projects from './components/Projects';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
          main: '#3f51b5',
        },
        secondary: {
          main: '#f50057',
        },
        background: {
          default: '#000000',
          paper: '#121212',
        },
        text: {
          primary: '#ffffff',
        },
      },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <>
        <CssBaseline />

        <div id="app_header">
          <Header/>
        </div>
        <div id="app_body">
          
          <AboutMe/>

          <Education/>

          <Projects/>

          <Skills/>

          <Contact/>
        </div>

        <div id="app_footer">
          
        </div>

      </>
    </ThemeProvider>
  );
}

export default App;
