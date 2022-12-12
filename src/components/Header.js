import './styles/Header.css';

import Navigation from './Navigation';
import GithubNt from './Logos/GithubNt';

function Header(Props){
    return (
    <header>
        {/* <p>{Props.test}</p>      how to use props*/}
        {/* <p>{Props.item}</p> */}
        <Navigation/>

        <div id="hr-info">
          <h1><span id ="HW">Hello, World!_ </span> Im Kevin</h1>
          <p>I am a software developer searching for a new spawn point and grinding levels to upgrade my skill tree</p>

          <div id="hr-buttons">

            <button id="project" class="glow-on-hover"> 
              Projects
            </button>
            <button id="github"class="glow-on-hover" onClick={()=> window.open("https://github.com/Izakevin","_blank")}> 
            <div id = "button_content">
              <GithubNt/>Github
            </div>
            </button>


          </div>
        </div>

      </header>
    )
}

export default Header;