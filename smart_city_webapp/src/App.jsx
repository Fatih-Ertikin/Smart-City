import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { NavigationBar } from './base/navigationBar/navigationBar';
import { MoistureSensor } from './components/moistureSensor/MoistureSensor';
import { MoistureHistory } from './components/moistureHistory/moistureHistory';
import { PlantInformation } from './components/plantInformation/plantInformation';

import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
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
            <MoistureHistory />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <PlantInformation />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <MoistureSensor />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            xs=6 sm=3
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            xs=6 sm=3
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            xs=6 sm=3
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            xs=6 sm=3
          </Paper>
        </Grid>
      </Grid>
    </div>

  );
}

export default App;
