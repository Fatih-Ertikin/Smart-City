import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({

}));

export const MoistureSensor = () => {
  const [currentMoistureLevel, setMoistureLevel] = useState(0);

  const classes = useStyles();
  return (
    <h1>Moisture Sensor</h1>
  );
};
