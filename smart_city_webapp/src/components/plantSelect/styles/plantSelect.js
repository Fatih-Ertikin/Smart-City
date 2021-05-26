import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 140,
    maxWidth: 140,
    color: 'white',
  },
  select: {
    color: 'white',
    '&:before': {
      borderColor: 'white',
    },
    '&:hover:not(.Mui-disabled):before': {
      borderColor: 'white',
    },
    '&:after': {
      borderColor: 'white',
    },
  },

  button: {
    background: 'linear-gradient(45deg, var(--background-start) 30%, var(--background-end) 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px var(--box-shadow)',
  },
}));
