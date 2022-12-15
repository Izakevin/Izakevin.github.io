import './App.css';
// import Button from '@mui/material/Button';

import Header from './components/Header.js';
import Education from './components/Education.js';
import Skills from './components/Skills.js';
import Contact from './components/Contact';
import AboutMe from './components/About_Me';
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

        <div id="projects">
          <h2 className='section'>My Projects</h2>

          <div id = "project">
            <h3>Only Survive</h3>
            <p>Coded in C++</p>
            <p>Only Survive is a first-person shooter survival game with the only goal is surviving. Enemies will spawn and chase you, be ready to wipe them out to survive or outrun them to run out the clock.</p>
            <p>This project features custom-made sprites I created for the enemies and for HUD, and incorporates music and sound effects when shooting the fireballs.</p>
          </div>

        </div>

        <Skills/>

        <Contact/>
        
      </div>

      <div id="app_footer">
        
      </div>

    </div>
  );
}

export default App;
