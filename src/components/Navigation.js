import './styles/Navigation.css';
import Btn1 from './Btn1.js';

function Navigation(Props){

    //id = null;
    // const handleClick = (id) => {
    //     id.current?.scrollIntoView({behavior: 'smooth'});
    // };

    
    return(
    <div id="hr-top">
        <p>Kevin Iza Software Developer</p>

        <nav id='Navagation'>
            <ul><Btn1 name= "About Me"/></ul>
            <ul><Btn1 name= "Education"/></ul>
            <ul><Btn1 name= "Projects"/></ul>
            <ul><Btn1 name= "Skills"/></ul>
            <ul><Btn1 name= "Contact"/></ul>
        </nav>
    </div>
    )
}

export default Navigation;