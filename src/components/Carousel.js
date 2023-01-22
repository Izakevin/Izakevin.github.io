import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';

import "./styles/Carousel.css"

function Carousel (props){
    const [index, setIndex] = useState(0); 
    const length = props.images.length;

    const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
    };

    const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
    };

    return (
        <div className="carousel">
            <Button onClick={handlePrevious} startIcon={<ArrowBackIosIcon />}></Button>

            <img src={props.images[index]} alt = {props.alt[index]}/>

            <Button onClick={handleNext} startIcon={<ArrowForwardIosIcon />}></Button>
            {/* <p>{index}</p> */}
        </div>
    );
};

export default Carousel;