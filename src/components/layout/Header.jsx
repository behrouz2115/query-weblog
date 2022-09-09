import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';

const Header = () => {
    return (
        <div>
           <AppBar position='sticky'>
            <Container maxWidth='lg'>
            <Toolbar>
                <Typography component='h1' variant ='h5' fontWeight='bold' flex={1}>My Weblog</Typography>
                <BookIcon/>
            </Toolbar>
            </Container>
            </AppBar> 
        </div>
    );
};

export default Header;