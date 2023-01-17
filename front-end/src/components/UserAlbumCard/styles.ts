import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '0 auto',
    maxWidth: '80%',
    maxHeight: '70%',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}));