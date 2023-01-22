import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function SwipeableTextMobileStepper() {
    return ( 
        <Carousel>
            <div>
                <img src="https://placehold.co/100x100" alt = "test img"/>
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="https://placehold.co/200x200" alt = "test img" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="https://placehold.co/300x300" alt = "test img" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
};

export default SwipeableTextMobileStepper;