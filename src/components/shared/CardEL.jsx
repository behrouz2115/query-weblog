import React from 'react';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Typography, Button } from '@mui/material';

const CardEL = ({title, slug, coverPhoto, author}) => {
    console.log(coverPhoto)
    return (
       <Card sx={{boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius:4}}>
            <CardHeader 
            avatar={<Avatar  sx={{marginRight:2}}/>}
            title={
            <Typography component='p' variant='p' color="text.secondary">
                {author.name}
            </Typography>}
            />
            <CardMedia 
               component='img'
               height='194'
               image='https://media.graphassets.com/S1MD4SCcRB6tcz24RbQq'
               alt={slug}/>
            <CardContent>
                <Typography
                  component='h3'
                  variant='h6'
                  color="text.primary">
                    {title}
                </Typography>
            </CardContent>
            <Divider variant='middle' sx={{margin:'10px'}}/>
            <CardActions disableSpacing>
                
                <Button variant="outlined" size='small'
                        sx={{width:'100px', borderRedius:3}}>Read ...
                </Button>
            </CardActions>
       </Card>
    );
};

export default CardEL;