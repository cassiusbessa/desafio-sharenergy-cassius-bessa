import { makeStyles } from "@material-ui/core/styles";



export const useStyles = makeStyles((theme) => ({
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