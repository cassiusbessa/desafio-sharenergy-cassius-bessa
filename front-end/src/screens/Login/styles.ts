import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%',
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: 'rgb(0, 162, 162)',
    color: 'white',
    '&:hover': {
      backgroundColor: 'rgb(0, 142, 142)',
    }
  },
  remember: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'flex-end'
  },
  checkbox: {
    color: 'rgb(214, 223, 39)',
    '&$checked': {
      color: 'rgb(214, 223, 39)'
    }
  },
  checked: {}
}));