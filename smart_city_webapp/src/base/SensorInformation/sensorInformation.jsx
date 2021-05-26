/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles/styles';

export const SensorInformation = ({
  sensorName, sensorType, currentValue, measurementUnit, iconComponent,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {iconComponent}
      <div className={classes.sensorInfo}>
        <CardContent className={classes.cardContent}>
          <Typography component="h5" variant="h5">
            {sensorName}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {sensorType}
          </Typography>
        </CardContent>
        <Typography variant="h5" color="textPrimary" className={classes.currentValue}>
          {currentValue}
          {' '}
          {measurementUnit}
        </Typography>
      </div>
    </Card>
  );
};
