import './styles/Skills.css'

import Cpp from './Logos/C++.js'
import Java from './Logos/Java.js'
import JavaScript from './Logos/JavaScript.js'
import Python from './Logos/Python.js'
import Html from './Logos/Html.js'
import Css from './Logos/Css.js'
import Csharp from './Logos/Csharp.js'
import UnrealEngine from './Logos/UnrealEngine.js'
import Docker from './Logos/Docker.js'
import MySQL from './Logos/MySQL.js'
import MondoDB from './Logos/MongoDB.js'

function Skills(){
    return(
    <div id="skills">
        <h2 className='section'>Skills</h2>

        <ul>
            <li><Cpp/></li>
            <li><Java/></li>
            <li><JavaScript/></li>
            <li><Python/></li>
            <li><Html/></li>
            <li><Css/></li>
            <li><Csharp/></li>
            <li><UnrealEngine/></li>
            <li><Docker/></li>
            <li><MySQL/></li>
            <li><MondoDB/></li>
        </ul>
        
    </div>
    )
}

export default Skills;