import {Card, CardContent, CardMedia, Typography, CardActionArea} from '@mui/material';



function MuiProjects(props){
    return (
        <Card sx={{ mx: 'auto', width: 1/2, marginBottom: 5, borderColor: 'black' }}>
            <CardActionArea target="_blank" href={props.link} >
                <CardMedia
                    component="img"
                    height="200"
                    image={props.image}
                    alt= {props.alt}
                    sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                />
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