/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import { SensorInformation } from '../../base/SensorInformation/sensorInformation';
import { CardIconHeight, CardIconWidth } from '../../style/globalStyles';

export const useStyles = makeStyles((theme) => ({
  card: {
    width: CardIconWidth,
    height: CardIconHeight,
    color: '#fff63d',
  },
}));

const LightSensor = ({ temperature }) => {
  const [currentTemp, setCurrentTemp] = useState(22.29);

  useEffect(() => {
    console.log(temperature);
    setCurrentTemp(temperature);
  }, [temperature]);

  const classes = useStyles();
  const getIcon = () => (<WbSunnyIcon className={classes.card} />);

  return (
    <SensorInformation
      sensorName="Temperatuur"
      sensorType="temperatuur sensor"
      currentValue={currentTemp.toFixed(2)}
      measurementUnit="celcius"
      iconComponent={getIcon()}
    />
  );
};

const mapStateToProps = (state) => ({
  temperature: state.refreshButton.temperature,
});

export default connect(mapStateToProps)(LightSensor);
