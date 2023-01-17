import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    flexDirection: 'column'
  },
  image: {
    width: '300px',
    height: '300px'
  },
  button: {
    margin: theme.spacing(2)
  }
}));
