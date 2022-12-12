import './styles/Contact.css';

import GithubNt from './Logos/GithubNt';
import LinkedIn from './Logos/LinkedIn';


function Contact(){
    return(
        <div id ="contact_me">
          <h2 className='section'>Contact Me</h2>
          
          <div id = "contact_buttons">
            <button class="glow-on-hover" onClick={()=> window.open("https://github.com/Izakevin","_blank")}> 
                <GithubNt/>
            
            </button>

            <button class="glow-on-hover" onClick={()=> window.open("https://www.linkedin.com/in/kevin-iza/","_blank")}> 
                <LinkedIn/>
        
            </button>
          </div>
        </div>
    )
}

export default Contact;