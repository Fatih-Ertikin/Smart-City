import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { refreshAsync } from './redux/waterButton';

export const WaterButton = () => {
  const dispatch = useDispatch();

  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={() => dispatch(refreshAsync())}
    >
      Bewateren
    </Button>
  );
};
