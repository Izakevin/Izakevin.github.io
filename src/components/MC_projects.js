import {Card, CardContent, Typography, CardActionArea} from '@mui/material';

import Carousel from './Carousel.js';

function MuiProjects(props){
    return (
        <Card>
            <Carousel
                images = {props.images}
                alt = {props.alt}
            />
            <CardActionArea target="_blank" href={props.link} >
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    
                    <div>
                        <Typography gutterBottom variant="h6" component="div">
                            {props.coding_txt}
                        </Typography>
                    </div>
                    <Typography variant="body2">
                        {props.description}
                    </Typography>

                    <br/>

                    <Typography variant="body2">
                        {props.contribution}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default MuiProjects;