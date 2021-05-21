import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

}));

export const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Test footer</h1>
    </div>
  );
};
