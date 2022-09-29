import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POST_COMMENT } from '../../graphql/quaries';
import { Avatar, Box, Grid, Typography } from '@mui/material';

const Comments = ({slug}) => {
    const { loading, data, errors } =useQuery(GET_POST_COMMENT, {variables:{slug}});
    console.log(data)
    return (
        <Grid container  sx={{
            boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
            borderRadius: 4,
            py: 1,
            mt: 5,
          }}>
            <Grid item sx={12} m={2}>
                <Typography container='p' variant='h6' fontWeight={700} color='primary'>Comments</Typography>
                {data.comments.map(comment => (
                    <Grid item xs={12} key={comment.id} m={2} p={2} border='1px silver solid' borderRadius={1}>
                        <Box component='div'>
                            <Avatar>{comment.name[0]}</Avatar>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};

export default Comments;