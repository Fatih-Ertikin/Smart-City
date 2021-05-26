import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 15,
  },
  appBar: {
    backgroundColor: 'purple',
  },
  title: {
    flexGrow: 1,
  },
  buttonText: {
    ...theme.typography.button,
    padding: theme.spacing(1),
  },
}));
