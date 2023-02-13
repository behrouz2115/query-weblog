import React, { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "../../graphql/mutations";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CommentForm = ({ slug }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [ pressed, setPressed ] = useState(false);
  const [ sendComment, { loading, data, errors } ] = useMutation(SEND_COMMENT,{
    variables:{name, email, text, slug}
  });
  const sendHandker = () => {
    if(name && email && text){
        sendComment();
        setPressed(true);
    } else {
        toast.warn("enter all information please",{
            position:'top-center'
        })
    }
  }
  if (data && pressed){
    toast.success('comment sent', {
        position:'top-center'
    });
    setPressed(false);
    setName('');
    setEmail('');
    setText('');
  }

  if (errors) return <h4>error</h4>
  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          Comments
        </Typography>
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          id="filled-basic"
          label="Username"
          variant="outlined"
          sx={{ width: "100%" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          id="filled-basic"
          label="Email"
          variant="outlined"
          sx={{ width: "100%" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          id="filled-basic"
          label="Text"
          variant="outlined"
          sx={{ width: "100%" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          multiline
          minRows={4}
        />
      </Grid>
      {
        loading ? ( <Button variant="contained" disabled>Sending ...</Button>
        ):(

      <Grid item xs={12} m={2}>
        <Button variant="contained" onClick={sendHandker}>send</Button>
      </Grid>
        )
      }
      <ToastContainer/>
    </Grid>
  );
};

export default CommentForm;
