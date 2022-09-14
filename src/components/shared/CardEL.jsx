import React from 'react';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';

const CardEL = ({title, slug, coverPhoto, author}) => {
    console.log(coverPhoto)
    return (
       <Card sx={{boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius:4}}>
            <CardHeader 
            avatar={<Avatar  sx={{marginRight:2}}/>}
            title={
            <Typography component='p' variant='p' color="text.primary">
                {author.name}
            </Typography>}
            />
            <CardMedia 
               component='img'
               height='194'
               image='https://media.graphassets.com/S1MD4SCcRB6tcz24RbQq'
               alt={slug}/>
            <CardContent></CardContent>
            <CardActions></CardActions>
       </Card>
    );
};

export default CardEL;