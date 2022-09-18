import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_AUTHOR } from '../../graphql/quaries';
import { Avatar, Divider, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Author = () => {
    const { loading, data, errors } = useQuery(GET_AUTHOR);
    if (loading) return <h3>loading ...</h3>
    if (errors) return <h3>errors</h3>
    console.log(data)
    const { authors } = data;
    return (
        <Grid
        container
        sx={{boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius:4}}
        >
            {authors.map((author, index) => (
            < React.Fragment key={author.id}>
            <Grid item xs={12} padding={2} >
                    <Link to={`/authors/${author.slug}`} style={{display:'flex', alignItems:'center',  textDecoration:'none'}}>
                    <Avatar src={author.avatar.url} sx={{marginRight:2}}/>
                    <Typography component='p' variant='p'>{author.name}</Typography>
                  </Link>
          </Grid>
            {
                index !== authors.length - 1 && (
          <Grid item xs={12} >

                    <Divider variant='middle' />
          </Grid>
                )
            }
                
                </React.Fragment>
                ))}
       </Grid>
    );
};

export default Author;