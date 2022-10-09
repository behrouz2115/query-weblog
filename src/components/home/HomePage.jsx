import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Author from '../author/Author';
import Blog from '../blog/Blog';

const HomePage = () => {
    return (
        <Container maxWidth='lg'>
            <Grid container spacing={2} p={4}>
                <Grid item xs={12} md={3} mt={4}>
                    <Typography component='h3' variant='h5' mb={3} fontWeight={700}>Authors</Typography>
                    <Author/>
                </Grid>
                <Grid item xs={12} md={9} mt={4}>
                <Typography component='h3' variant='h5' mb={3} fontWeight={700}>Posts</Typography>
                <Blog/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HomePage;