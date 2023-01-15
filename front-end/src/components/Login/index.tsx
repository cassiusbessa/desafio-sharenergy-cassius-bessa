import React, { FormEvent, useState } from 'react';
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { Container, Grid, TextField, Button, Typography } from '@material-ui/core';
import { useNavigate  } from "react-router-dom";
import { useStyles } from './styles';
import { login } from "../../apis/main-api";


export default function Login() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const adminRemember = (remember: boolean, token: string) => {
    if (remember) {
      localStorage.setItem("token", token);
    } else {
      sessionStorage.setItem("token", token);
      localStorage.removeItem("token");
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
      const loginResponse = (await login({username, password}));
      console.log(loginResponse)
      const token = loginResponse.data.accessToken;
      console.log(token);
      adminRemember(remember, token);
      navigate("/home");
  };

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
        <Grid container spacing={2} justify="flex-end">
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={remember}
                  onChange={(event) => setRemember(event.target.checked)}
                  classes={{
                    root: classes.checkbox,
                    checked: classes.checked
                  }}
                />
              }
              label="Remember me"
            />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
