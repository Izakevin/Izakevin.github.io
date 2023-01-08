import {Card, CardContent, CardMedia, Typography, CardActionArea} from '@mui/material';

function MuiCard(props){
    return (
        <Card sx={{ mx: 'auto', width: 1/2 }}>
            <CardActionArea target="_blank" href={props.link} >
            <CardMedia
                component="img"
                height="200"
                image={props.image}
                alt="green iguana"
                sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.text}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default MuiCard;