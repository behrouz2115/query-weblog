import React from 'react';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia } from '@mui/material';

const CardEL = ({title, slug, coverPhoto, author}) => {
    console.log(author.avatar)
    return (
       <Card sx={{boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius:4}}>
            {/* <CardHeader 
            avatar={<Avatar src={author.avatar.url}/>} /> */}
            <CardMedia/>
            <CardContent></CardContent>
            <CardActions></CardActions>
       </Card>
    );
};

export default CardEL;