import './styles/Education.css'

function Education(){
    return(
        <div id="education">
            <h2 className='section'>Education</h2>

            <div id = "edu_layout">
                <img src={require('./Logos/tandon_seal.webp')} alt="New York University Tandon School Seal"/>
                <div id = "edu_txt_layout">
                    <h3>New York University Tandon School of Engineering</h3>

                    <p>Title: Bachelors Degree of Science in Computer Science</p>

                    <p>Minor: Studies of Technology, Science, and Society</p>
                </div>
            </div> 

        </div>
    )
}

export default Education;