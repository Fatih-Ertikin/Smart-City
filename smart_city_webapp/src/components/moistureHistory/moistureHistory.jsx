import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Line } from 'react-chartjs-2';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export const MoistureHistory = () => {
  const data = {
    labels: ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'],
    datasets: [
      {
        label: 'Grondvochtigheid',
        data: [10, 20, 59, 20, 34, 24],
        fill: false,
        backgroundColor: 'rgb(158, 58, 150)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Line data={data} options={options} />
    </div>
  );
};
