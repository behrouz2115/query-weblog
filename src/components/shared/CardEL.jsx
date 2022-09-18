import React from 'react';
import { Avatar,
         Card,
         CardActions,
         CardContent,
         CardHeader,
         CardMedia,
         Divider,
         Typography,
         Button } from '@mui/material';
import { Link } from 'react-router-dom';

const CardEL = ({title, slug, coverPhoto, author}) => {
    console.log(author?.avatar?.url)
    return (
       <Card sx={{boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius:4}}>
            <CardHeader 
            avatar={<Avatar src={author?.avatar?.url}  sx={{marginRight:2}}/>}
            title={
            <Typography component='p' variant='p' color="text.secondary">
                {author.name}
            </Typography>}
            />
            <CardMedia 
               component='img'
               height='194'
               image={coverPhoto?.url}
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
                <Link to={`/blogs/${slug}`} style={{textDecoration:'none', width:'100%'}}>
                <Button variant="outlined" size='small'
                        sx={{width:'100px', borderRedius:3}}>Read ...
                </Button>
                </Link>
            </CardActions>
       </Card>
    );
};

export default CardEL;