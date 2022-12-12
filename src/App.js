import './App.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Header from './components/Header.js';
import Education from './components/Education.js';
import Skills from './components/Skills.js';
import Contact from './components/Contact';
import AboutMe from './components/About_Me';

function App() {

  return (
    <div>
      <AnchorLink href="#education"><button>Scroll to education</button></AnchorLink>

      <Header/>
      <body>

        <AboutMe/>

        <Education/>

        <div id="projects">
          <h2 className='section'>My Projects</h2>

          <h3>Coming Soon ...</h3>
        </div>

        <Skills/>

        <Contact/>
        
      </body>

      <footer>
        
      </footer>

      {/* <div ref={ref}>Some content here</div> */}
    </div>
  );
}

export default App;
