import React, { FormEvent, useState } from 'react';
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { Container, Grid, TextField, Button, Typography } from '@material-ui/core';
import { useNavigate  } from "react-router-dom";
import { useStyles } from './styles';
import { clearToken, login, setSessionToken, setToken } from "../../apis/main-api";
import { useAuthCheck } from '../../utils/validate-token';


export default function Login() {
  useAuthCheck();
  const classes = useStyles();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const adminRemember = (remember: boolean, token: string) => {
    if (remember) {
      setToken(token);
    } else {
      setSessionToken(token);
      clearToken();
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
      const loginResponse = (await login({username, password}));
      const token = loginResponse.data.accessToken;
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