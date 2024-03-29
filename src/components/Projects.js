import './styles/Projects.css'
import logo from "../logo192.png";
import Carousel from './Carousel.js';

import MuiProjects from './MC_projects';

function Projects(){
    return (
        <div id="projects">
          <h2 className='section'>My Projects</h2>

          <MuiProjects
            link = "https://github.com/Izakevin/CSUY3113/tree/master/P6"
            images = {[logo]}
            alt = {["test logo"]}
            coding_txt = "Coded in C++"
            title = "Only Survive" 
            description = "Only Survive is a first-person shooter survival game with the only goal is surviving. Enemies will spawn and chase you, be ready to wipe them out to survive or outrun them to run out the clock."
            contribution = "This project features custom-made sprites I created for the enemies and HUD, and incorporates music and sound effects when shooting the fireballs."
          />

          <MuiProjects
            link = "https://github.com/NYUHotSpots/HotSpots-ui"
            images = {[logo]}
            alt = {["test logo"]}
            coding_txt = "Coded in React.js, Python, MongoDB, use Heroku API and GitHub actions"
            title = "Hot Spots" 
            description = "Hot Spots is a collaborative project I did with 3 other group members. The goal of the HotSpots page is to show location information about different spots around the New York University Campus in New York. The kind of information being shown would be seat availability, temperature, noise level, ambiance, and capacity."
            contribution = "My contribution to this project was coding the front end using react and making sure the information passed from the API was able to be correctly used to display on the website."
          />

          <MuiProjects
            link = "https://github.com/3083DataBase/Flight"
            images = {[logo, logo, logo]}
            alt = {["test logo", "test logo", "test logo"]}
            coding_txt = "Coded in HTML, CSS, SQL and uses MYSQL"
            title = "Airline Ticket Database" 
            description = "The Airline Ticket Database project was a collaborative work with 2 other group members. The goal of the project was to create a database and frontend website to track customer profiles, tickets sold and available, flight information, airports, and employee profiles."
            contribution = "My contribution to this project was working with a team to create a schema for the database we wanted to create and code the SQL queries to make the tables required with the help of the schema. I also worked on the website to display the necessary information on the screen and allow for inputs into the system."
          />

        </div>
    )
}

export default Projects;