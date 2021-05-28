import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import { useSelector } from 'react-redux';
import { SensorInformation } from '../../base/SensorInformation/sensorInformation';
import { CardIconHeight, CardIconWidth } from '../../style/globalStyles';

export const useStyles = makeStyles((theme) => ({
  card: {
    width: CardIconWidth,
    height: CardIconHeight,
    color: '#fff63d',
  },
}));

export const LightSensor = () => {
  const [currentTemp, setCurrentTemp] = useState(0);
  const temperature = useSelector((state) => state.temperature);
  useEffect(() => {
    setCurrentTemp(temperature);
  }, [temperature]);

  const classes = useStyles();
  const getIcon = () => (<WbSunnyIcon className={classes.card} />);

  console.log(currentTemp);
  return (
    <SensorInformation
      sensorName="Temperatuur"
      sensorType="temperatuur sensor"
      currentValue={currentTemp}
      measurementUnit="celcius"
      iconComponent={getIcon()}
    />
  );
};
