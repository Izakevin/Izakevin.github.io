import './App.css';

import Header from './components/Header.js';
import Education from './components/Education.js';
import Skills from './components/Skills.js';
import Contact from './components/Contact';
import AboutMe from './components/About_Me';

function App() {

  return (
    <div>
      <div id="app_header">
        <Header/>
      </div>
      <div id="app_body">

        <AboutMe/>

        <Education/>

        <div id="projects">
          <h2 className='section'>My Projects</h2>

          <h3>Coming Soon ...</h3>
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
