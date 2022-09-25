import React from 'react';
import { useQuery } from '@apollo/client';
import { useNavigate, useParams } from 'react-router-dom';
import { POST_INFO } from '../../graphql/quaries';
import Loader from '../shared/Loader';
import { Container } from '@mui/system';
import { Avatar, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import sanitizeHtml from 'sanitize-html';

const BlogPage = () => {
    const { slug } = useParams();
    const { loading, data, errors } = useQuery(POST_INFO, {
        variables: {slug}
    });

    // const { post } = data;
    const navigate = useNavigate();


    if (loading) return <Loader/>
    if (errors) return <h4>error</h4>
    console.log(data)
    return (
    <Container  maxWidth='lg'>
        <Grid container>
            <Grid item xs={12} mt={9} display='flex' justifyContent='space-between'>
                <Typography component='h2' variant='h4' color='primary' fontWeight={700}>
                    {data.post.title}
                </Typography>
                <ArrowBackRoundedIcon onClick={()=>navigate(-1)}/>
            </Grid>
            <Grid item xs={12} mt={6}>
                <img src={data.post.coverPhoto.url} alt={data.post.slug} width='100%' style={{borderRadius:15}}/>
            </Grid>
            <Grid item xs={12} mt={7} display='flex' alignItems='center'>
                <Avatar src={data.post.author.avatar.url} sx={{width:80, height:80, marginRight:2 }}/>
                <Box component='div'>
                <Typography component='p' variant='h5' fontWeight={700}>
                    {data.post.author.name}
                </Typography>
                <Typography component='p' variant='p' color='text.secondary'>
                    {data.post.author.field}
                </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} mt={5}>
                <div dangerouslySetInnerHTML={{__html:sanitizeHtml(data.post.content.html)}}></div>
            </Grid>
        </Grid>
    </Container>
    );
};

export default BlogPage;