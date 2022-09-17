import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_AUTHOR } from '../../graphql/quaries';
import { Avatar, Grid, Typography } from '@mui/material';

const Author = () => {
    const { loading, data, errors } = useQuery(GET_AUTHOR);
    if (loading) return <h3>loading ...</h3>
    if (errors) return <h3>errors</h3>
    console.log(data)
    const { authors } = data;
    return (
       <Grid
       sx={{boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius:4}}
       >
            {authors.map(author => (
                <Grid item xs={12} padding={2} key={author.id}>
                    <Avatar src={author.avatar.url} sx={{marginRight:2}}/>
                    <Typography component='p' variant='p'>{author.name}</Typography>
                </Grid>
            ))}
       </Grid>
    );
};

export default Author;