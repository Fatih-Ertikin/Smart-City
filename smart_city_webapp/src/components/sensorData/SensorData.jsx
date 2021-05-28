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
    labels: [0, 1, 2, 3, 4, 5, 6],
    datasets: [
      {
        label: 'Grondvochtigheid',
        data: [10.23, 21.24, 23.42, 24.32, 50.235, 60.32],
        fill: false,
        backgroundColor: '#2b87ff',
        borderColor: '#d4f1f9',
      },
      {
        label: 'Licht',
        data: [22, 21.36, 22.22, 23.2, 23.43, 25.34],
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
