/* eslint-disable react/jsx-indent */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import { useStyles } from './styles/plantInformation';

export const PlantInformation = ({
  plantName, idealSoilMoisture, idealLightLevel,
}) => {
  const today = moment().format('YYYY-MM-DD');
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
          <h2>Ideale grondvochtigheid: 1/2cm diep vochtig</h2>
          <Typography className={classes.plantInfoSubtitle} component="h5" color="textSecondary">
          <a href="https://www.espoma.com/fruits-vegetables/how-much-water-do-my-tomato-plants-need/#:~:text=Garden%20tomatoes%20typically%20require%201%2D2%20inches%20of%20water%20a%20week.&text=Tomato%20plants%20grown%20in%20containers,runs%20freely%20from%20the%20bottom.">Bron: Espoma</a>
          </Typography>
          <h2>Ideale temperatuur: 14-16 graden Celcius</h2>
          <Typography className={classes.plantInfoSubtitle} component="h5" color="textSecondary">
            <a href="https://www.gardeningknowhow.com/edible/vegetables/tomato/growing-temp-for-tomatoes.htm">Bron: gardeningknowhow </a>
          </Typography>
          <h2>
Laatst water gegeven:
{' '}
{ today }
          </h2>
        </div>
        <div className={classes.plantPicture}>
          <img src="/images/tomatoPlant.png" alt="A tomato plant" />
        </div>
      </div>
    </div>
  );
};
