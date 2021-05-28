import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { refreshDataAsync } from './redux/refreshButton';

export const RefreshButton = () => {
  const dispatch = useDispatch();

  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={() => dispatch(refreshDataAsync())}
    >
      Laatste data ophalen
    </Button>
  );
};
