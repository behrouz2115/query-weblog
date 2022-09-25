import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { POST_INFO } from '../../graphql/quaries';
import Loader from '../shared/Loader';
import { Container } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

const BlogPage = () => {
    const { slug } = useParams();
    const { loading, data, errors } = useQuery(POST_INFO, {
        variables: {slug}
    });
    const { post } = data;
    if (loading) return <Loader/>
    if (errors) return <h4>error</h4>
    console.log(data)
    return (
    <Container  maxWidth='lg'>
        <Grid container>
            <Grid item xs={12} mt={9} display='flex' justifyContent='space-between'>
                <Typography component='h2' variant='h4' color='primary' fontWeight={700}>
                    {post.title}
                </Typography>
                <ArrowBackRoundedIcon/>
            </Grid>
        </Grid>
    </Container>
    );
};

export default BlogPage;