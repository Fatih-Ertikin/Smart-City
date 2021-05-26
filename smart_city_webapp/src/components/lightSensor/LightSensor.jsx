import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import { SensorInformation } from '../../base/SensorInformation/sensorInformation';
import { JimmyPurple, CardIconHeight, CardIconWidth } from '../../style/globalStyles';

export const useStyles = makeStyles((theme) => ({
  card: {
    width: CardIconWidth,
    height: CardIconHeight,
    color: JimmyPurple(1),
  },
}));

export const LightSensor = () => {
  const classes = useStyles();
  const getIcon = () => (<WbSunnyIcon className={classes.card} />);

  return (
    <SensorInformation
      sensorName="Zonlicht"
      sensorType="Lichtdiode"
      currentValue={15}
      measurementUnit="lx"
      iconComponent={getIcon()}
    />
  );
};
