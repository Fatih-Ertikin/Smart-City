import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Line } from 'react-chartjs-2';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export const SensorData = () => {
  const data = {
    labels: ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'],
    datasets: [
      {
        label: 'Grondvochtigheid',
        data: [10, 20, 40, 20, 34, 24],
        fill: false,
        backgroundColor: '#2b87ff',
        borderColor: '#d4f1f9',
      },
      {
        label: 'Licht',
        data: [25, 10, 13, 15.2, 13, 30],
        fill: false,
        backgroundColor: '#fff63d',
        borderColor: '#fff0a1',
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
      <Typography component="h4" variant="h4" color="textSecondary">
        Sensor data
      </Typography>
      <Line data={data} options={options} />
    </div>
  );
};
