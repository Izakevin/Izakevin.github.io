import {Card, CardContent, CardMedia, Typography, CardActionArea} from '@mui/material';

import Carousel from './Carousel.js';



function MuiProjects(props){
    return (
        <Card sx={{ mx: 'auto', width: 1/2, marginBottom: 5 }}>
            <Carousel
                images = {props.images}
                alt = {props.alt}
            />
            <CardActionArea target="_blank" href={props.link} >
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>

                    <Typography gutterBottom variant="h6" component="div">
                        {props.coding_txt}
                    </Typography>

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