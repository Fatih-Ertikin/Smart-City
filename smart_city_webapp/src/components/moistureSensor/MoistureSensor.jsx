/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import OpacityIcon from '@material-ui/icons/Opacity';
import { SensorInformation } from '../../base/SensorInformation/sensorInformation';
import { JimmyPurple, CardIconHeight, CardIconWidth } from '../../style/globalStyles';
import { updateGroundMoisture } from './slices/MoistureSensorSlice';

export const useStyles = makeStyles((theme) => ({
  card: {
    width: CardIconWidth,
    height: CardIconHeight,
    color: '#2b87ff',
  },
}));

const MoistureSensor = ({ soilMoistureLevel }) => {
  const [currentSoilMoisture, setCurrentSoilMoisture] = useState(14);
  useEffect(() => {
    console.log(soilMoistureLevel);
    setCurrentSoilMoisture(soilMoistureLevel);
  }, [soilMoistureLevel]);

  const classes = useStyles();
  const getIcon = () => (<OpacityIcon className={classes.card} />);

  return (
    <SensorInformation
      sensorName="Grondvochtigheid"
      sensorType="Capactive V1.2"
      currentValue={currentSoilMoisture}
      measurementUnit="%"
      iconComponent={getIcon()}
    />
  );
};

const mapStateToProps = (state) => ({
  soilMoistureLevel: state.refreshButton.soilMoisture,
});

export default connect(mapStateToProps)(MoistureSensor);
