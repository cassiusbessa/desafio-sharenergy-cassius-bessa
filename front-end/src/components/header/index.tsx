import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "white",
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    position: 'fixed',
    top: 0,
    width: '100%',
  },
  logout: {
    background: "rgb(0, 162, 162)",
    color: "#fff"
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" className={classes.title}>
              ShareEnergy
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Button color="inherit">Gatinhos</Button>
            <Button color="inherit">Doguinhos</Button>
            <Button color="inherit">Customers</Button>
            <Button color="inherit">Home</Button>
            <Button className={classes.logout} color="inherit">Logout</Button>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
}