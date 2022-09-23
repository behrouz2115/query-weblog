import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_AUTHOR_INFO } from '../../graphql/quaries';
import { Avatar, Container, Grid, Typography } from '@mui/material';
import sanitizeHtml from 'sanitize-html';
import CardEl from '../../components/shared/CardEL';

const AuthorPage = () => {
    const { slug } = useParams();
    const { loading, data, errors } = useQuery(GET_AUTHOR_INFO, {
        variables:{ slug }
    });
    if (loading) return <h4>Loading ...</h4>
    if (errors) return <h4>error</h4>
    console.log(data)
    const {author: {name, field, avatar, description, posts}} = data;
    return (
        <Container maxWidth='lg'>
            <Grid container mt={10}>
                <Grid item  xs={12} display='flex' flexDirection='column' alignItems='center'>

                    <Avatar src={avatar.url} sx={{width:250, height:250}} />

                    <Typography component='h3' variant='h6' fontWeight={700} mt={4}>{name}</Typography>

                    <Typography component='p' variant='h6' color='text.secondary' mt={2}>{field}</Typography>

                </Grid>
                <Grid item xs={12} mt={5}>
                    <div dangerouslySetInnerHTML={{__html: sanitizeHtml(description.html)}}></div>
                </Grid>
                <Grid item mt={6} >
                    <Typography component='h3' variant='h5' fontWeight={700}> {name}  Aritcls</Typography>
                    <Grid container spacing={2} mt={2}>
                        {posts.map(post =>(
                            <Grid item xs={12} sm={6} md={4} key={post.id}>
                                 <CardEl title={post.title} slug={post.slug} coverPhoto={post.coverPhoto}/> 
                           </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

        </Container>
    );
};

export default AuthorPage;