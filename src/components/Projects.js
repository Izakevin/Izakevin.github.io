import './styles/Projects.css'

function Projects(){
    return (
        <div id="projects">
          <h2 className='section'>My Projects</h2>

          <div id = "proj">
            <h3>Only Survive</h3>
            <p>Coded in C++</p>
            <p>Only Survive is a first-person shooter survival game with the only goal is surviving. Enemies will spawn and chase you, be ready to wipe them out to survive or outrun them to run out the clock.</p>
            <p>This project features custom-made sprites I created for the enemies and for HUD, and incorporates music and sound effects when shooting the fireballs.</p>
          </div>

          <div id = "proj">
            <h3>Hot Spots</h3>
            <p>Coded in React.js, Python, MongoDB, use Heroku API and GitHub actions</p>
            <p>Hot Spots is a collaborative project I did with 3 other group members. The goal of the HotSpots page is to show location information about different spots around the New York University Campus in New York. The kind of information being shown would be seat availability, temperature, noise level, ambiance, and capacity. </p>
            <p>My contribution to this project was coding the front end using react and making sure the information passed from the API was able to be correctly used to display on the website.</p>
          </div>

          <div id = "proj">
            <h3>Airline Ticket Database</h3>
            <p>Coded in HTML, CSS, SQL and uses MYSQL</p>
            <p>The Airline Ticket Database project was a collaborative work with 2 other group members. The goal of the project was to create a database and frontend website to track customer profiles, tickets sold and available, flight information, airports, and employee profiles.</p>
            <p>My contribution to this project was working with a team to create a schema for the database we wanted to create and code the SQL queries to make the tables required with the help of the schema. I also worked on the website to display the necessary information on the screen and allow for inputs into the system.</p>
          </div>

        </div>
    )
}

export default Projects;