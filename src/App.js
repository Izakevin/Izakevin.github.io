import './App.css';
// import Button from '@mui/material/Button';

import Header from './components/Header.js';
import Education from './components/Education.js';
import Skills from './components/Skills.js';
import Contact from './components/Contact';
import AboutMe from './components/About_Me';
import Projects from './components/Projects';
// import DrawerAppBar from './components/DrawerAppBar';

function App() {

  return (
    <div>
      {/* <DrawerAppBar/> */}
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

    </div>
  );
}

export default App;
