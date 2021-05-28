import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { giveWater } from './redux/waterButton';

export const WaterButton = () => {
  const isWatering = useSelector((state) => state.isWatering);
  const dispatch = useDispatch();

  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={() => dispatch(giveWater(1))}
    >
      Bewateren
    </Button>
  );
};
