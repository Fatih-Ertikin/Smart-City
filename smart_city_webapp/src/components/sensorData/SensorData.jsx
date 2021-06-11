/* eslint-disable prefer-const */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Line } from 'react-chartjs-2';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const SensorData = ({ chartData }) => {
  const [tableData, setTableData] = useState('NOSTATE');

  useEffect(() => {
    if (chartData.length !== 0) {
      const temps = [];
      const moistures = [];
      let keys = Object.keys(chartData);
      keys.shift();
      keys.forEach((key) => {
        temps.push(chartData[key].temperature);
        moistures.push(chartData[key].soilMoisture);
      });

      const newTableData = {
        labels: keys,
        datasets: [
          {
            label: 'Grondvochtigheid',
            fill: false,
            backgroundColor: '#2b87ff',
            borderColor: '#d4f1f9',
            data: temps,
          },
          {
            label: 'Temperatuur',
            data: moistures,
            fill: false,
            backgroundColor: '#fff63d',
            borderColor: '#fff0a1',
          },

        ],
      };
      setTableData(newTableData);
    }
  }, [chartData]);

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

  if (tableData === 'NOSTATE') return null;

  const totalTemp = tableData.datasets[0].data.reduce((acc, red) => acc + red, 0);

  const totalSoilMoisture = tableData.datasets[1].data.reduce((acc, red) => acc + red, 0);

  const avgTemp = (totalTemp / tableData.datasets[0].data.length).toFixed(2);
  const avgSoil = (totalSoilMoisture / tableData.datasets[1].data.length).toFixed(2);

  const inRecommendedTemperature = avgSoil > 14 && avgSoil < 16;
  const isLower = avgSoil < 14;
  const isHigher = avgSoil > 16;

  const renderTips = () => {
    if (inRecommendedTemperature) {
      return (
        <Typography component="h6" variant="h6" color="textSecondary">
          Gemiddelde planten temperatuur is binnen gezonde waarden.
        </Typography>
      );
    } if (isLower) {
      return (
        <Typography component="h6" variant="h6" color="textSecondary">
          Plant heeft het te koud, verplaats hem naar een warmere plek.
        </Typography>
      );
    }
    return (
      <Typography component="h6" variant="h6" color="textSecondary">
        Plant heeft het te warm, verplaats hem naar een koudere plek.
      </Typography>
    );
  };

  return (
    <div className={classes.root}>
      <Typography component="h5" variant="h5" color="textSecondary">
        Gemiddelde temperatuur: {avgTemp}
        {' '}
        Gemiddelde grondvochtigheid: {avgSoil}
      </Typography>
      <Line data={tableData} options={options} />
      <br />
      {renderTips()}
    </div>
  );
};

const mapStateToProps = (state) => ({
  chartData: state.refreshButton.chartData,
});

export default connect(mapStateToProps)(SensorData);
