import React,{useState} from 'react';
import { Button, Grid, Typography} from '@mui/material';
import TextField from '@mui/material/TextField';


const CommentForm = ({slug}) => {
    const [ name, setName ] = useState();
    const [ email, setEmail ] = useState();
    const [ text, setText ] = useState();
    return (
        <Grid container sx={{boxShadow:'rgba(0,0,0,0.1) 0px 4px 12px', borderRadius:4, py:1,mt:5} }>
            <Grid item xs={12} m={2} >
                <Typography component='p' variant='h6' fontWeight={700} color='primary'>Comments</Typography>
            </Grid>
            <Grid item xs={12} m={2} >
                <TextField id="filled-basic" label="Username" variant="outlined" sx={{width:'100%'}} value={name} onChange={e=>setName(e.target.value)} />
            </Grid>
            <Grid item xs={12} m={2} >
                <TextField id="filled-basic" label="Email" variant="outlined" sx={{width:'100%'}} value={email} onChange={e=>setEmail(e.target.value)} />
            </Grid>
            <Grid item xs={12} m={2} >
                <TextField id="filled-basic" label="Text" variant="outlined" sx={{width:'100%'}} value={text} onChange={e=>setText(e.target.value)} multiline minRows={4} />

            </Grid>
            <Grid item xs={12} m={2}>
                <Button variant='contained'>send</Button>
            </Grid>
            
        </Grid>
    );
};

export default CommentForm;