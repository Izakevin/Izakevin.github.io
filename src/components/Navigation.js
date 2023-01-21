import AnchorLink from 'react-anchor-link-smooth-scroll';

import Btn1 from './Btn1.js';
import './styles/Navigation.css';

function Navigation(Props){

    return(
    <div id="hr-top">
        <p>Kevin Iza</p>

        <nav id='Navagation'>
            <ul><AnchorLink href="#contact"><Btn1 name= "Contact"/></AnchorLink></ul>
            <ul><AnchorLink href="#skills"><Btn1 name= "Skills"/></AnchorLink></ul>
            <ul><AnchorLink href="#projects"><Btn1 name= "Projects"/></AnchorLink></ul>
            <ul><AnchorLink href="#education"><Btn1 name= "Education"/></AnchorLink></ul>
            <ul><AnchorLink href="#about_me"><Btn1 name= "About Me"/></AnchorLink></ul>
        </nav>
    </div>
    )
}

export default Navigation;