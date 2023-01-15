import React, { FormEvent, useState } from 'react';
import { Container, Grid, TextField, Button, Typography } from '@material-ui/core';
import { useNavigate  } from "react-router-dom";
import { useStyles } from './styles';


export default function Login() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/home");
  }

  return (
    <Container className={classes.container}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" align="center">
              Login
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="username"
              label="Username"
              className={classes.textField}
              margin="normal"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              label="Password"
              type="password"
              className={classes.textField}
              margin="normal"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" className={classes.button}>
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
