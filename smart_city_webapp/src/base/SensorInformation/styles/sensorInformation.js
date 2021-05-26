import { makeStyles } from '@material-ui/core/styles';
import { TileShadow } from '../../../style/globalStyles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    'box-shadow': TileShadow,
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
