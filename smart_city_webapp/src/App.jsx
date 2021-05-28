import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { NavigationBar } from './base/navigationBar/navigationBar';
import MoistureSensor from './components/moistureSensor/MoistureSensor';
import LightSensor from './components/lightSensor/LightSensor';
import { SensorData } from './components/sensorData/SensorData';
import { TileShadow } from './style/globalStyles';
import { RefreshButton } from './components/refreshButton/RefreshButton';
import { PlantInformation } from './components/plantInformation/plantInformation';

import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 500,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    'box-shadow': TileShadow,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={`App ${classes.root}`}>
      <header className="App-header">
        <NavigationBar />
      </header>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <SensorData />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <PlantInformation />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <MoistureSensor />
        </Grid>
        <Grid item xs={6} sm={3}>
          <LightSensor />
        </Grid>
        <Grid item xs={6} sm={6}>
          <RefreshButton className={classes.paper} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
