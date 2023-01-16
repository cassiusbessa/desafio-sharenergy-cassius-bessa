import { makeStyles } from "@material-ui/core/styles";



export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "white",
    padding: theme.spacing(2)
  },
  title: {
    fontFamily: "Special Font",
    display: "flex",
    alignItems: "center",
    marginLeft: theme.spacing(2),
    color: "rgb(214, 223, 39)",
    "& span": {
      color: "rgb(0, 162, 162)"
    }
  },
  sectionDesktop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: theme.spacing(2),
    "& a": {
      color: "rgb(0, 0, 0)",
      textDecoration: "none",
      marginRight: theme.spacing(2)
    },
    "& button": {
      background: "rgb(0, 162, 162)",
      color: "#fff"
    }
  }
}));