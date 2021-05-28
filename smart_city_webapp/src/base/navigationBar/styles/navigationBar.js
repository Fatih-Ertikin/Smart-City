import { makeStyles } from '@material-ui/core/styles';
import { JimmyPurple } from '../../../style/globalStyles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 15,
  },
  appBar: {
    backgroundColor: JimmyPurple(0.8),
  },
  title: {
    flexGrow: 1,
  },
  buttonText: {
    ...theme.typography.button,
    padding: theme.spacing(1),
  },
}));
