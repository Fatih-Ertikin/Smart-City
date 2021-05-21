import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  navigationBar: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  buttonText: {
    ...theme.typography.button,
    padding: theme.spacing(1),
  },
}));

export const NavigationBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.navigationBar}>
      <AppBar position="static">
        <Toolbar>
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
