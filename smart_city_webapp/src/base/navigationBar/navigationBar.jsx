import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { PlantSelect } from '../../components/plantSelect/PlantSelect';
import { useStyles } from './styles/styles';

export const NavigationBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <PlantSelect />
          <Typography variant="h6" className={classes.title}>
            Smart Gardening
          </Typography>
          <Typography variant="h6" className={classes.buttonText}>
            Team C
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
