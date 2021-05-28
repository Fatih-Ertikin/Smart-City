import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import OpacityIcon from '@material-ui/icons/Opacity';
import { SensorInformation } from '../../base/SensorInformation/sensorInformation';
import { JimmyPurple, CardIconHeight, CardIconWidth } from '../../style/globalStyles';
import { updateGroundMoisture } from './slices/MoistureSensorSlice';

export const useStyles = makeStyles((theme) => ({
  card: {
    width: CardIconWidth,
    height: CardIconHeight,
    color: '#2b87ff',
  },
}));

export const MoistureSensor = () => {
  // Retrieve count from state.
  const { groundMoisture } = useSelector((state) => state.moistureSensor);
  // setup dispatcher.
  const dispatch = useDispatch();
  const [currentMoistureLevel, setMoistureLevel] = useState(0);
  useEffect(() => {

  }, [groundMoisture]);

  const classes = useStyles();
  const getIcon = () => (<OpacityIcon className={classes.card} />);

  return (
    <SensorInformation
      sensorName="Grondvochtigheid"
      sensorType="Capactive V1.2"
      currentValue={30}
      measurementUnit="ml"
      iconComponent={getIcon()}
    />
  );
};
