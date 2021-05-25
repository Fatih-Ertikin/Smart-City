import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { updateGroundMoisture } from './slices/MoistureSensorSlice';

const useStyles = makeStyles((theme) => ({

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
  return (
    <h1>Moisture Sensor</h1>
  );
};
