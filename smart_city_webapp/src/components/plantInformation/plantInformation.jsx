/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles/plantInformation';

export const PlantInformation = ({
  plantName, idealSoilMoisture, idealLightLevel,
}) => {
  const classes = useStyles();
  // todo get plant info from state and fill component with it.
  return (
    <div>
      <Typography component="h4" variant="h4" color="textSecondary">
        Sensor data
      </Typography>
      <div className={classes.wrapper}>
        <div className={classes.plantInfo}>
          <h1>Tomaten plant</h1>
          <Typography className={classes.plantInfoSubtitle} component="h4" color="textSecondary">
            Solanum lycopersicum
          </Typography>
          <h2>Ideale grondvochtigheid: 45</h2>
          <Typography className={classes.plantInfoSubtitle} component="h5" color="textSecondary">
            Bron: google.nl
          </Typography>
          <h2>Ideale belichting: 20</h2>
          <Typography className={classes.plantInfoSubtitle} component="h5" color="textSecondary">
            Bron: google.nl
          </Typography>
          <h2>Laatst water gegeven: 2021-05-29</h2>
        </div>
        <div className={classes.plantPicture}>
          <img src="/images/tomatoPlant.png" alt="A tomato plant" />
        </div>
      </div>
    </div>
  );
};
