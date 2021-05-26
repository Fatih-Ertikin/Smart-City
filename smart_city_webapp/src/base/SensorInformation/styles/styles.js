import { makeStyles } from '@material-ui/core/styles';
import { JimmyPurple } from '../../../style/globalStyles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    'box-shadow': `10px 10px 12px ${JimmyPurple(0.5)}`,
  },
  sensorInfo: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 50,
  },
  cardContent: {

  },
  currentValue: {
    marginTop: -20,
    paddingBottom: 10,
  },
}));
