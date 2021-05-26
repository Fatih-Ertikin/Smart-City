import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
        backgroundColor: 'white',
        borderColor: 'rgba(255, 99, 132, 1)',
      },
      {
        label: 'Licht',
        data: [25, 10, 13, 15.2, 13, 30],
        fill: false,
        backgroundColor: 'rgb(158, 58, 150)',
        borderColor: 'rgba(255, 99, 132, 1)',
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
