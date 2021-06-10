import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { refreshDataAsync, setSensorData } from './redux/refreshButton';
import { socket } from '../../websocket';

export const RefreshButton = () => {
  const dispatch = useDispatch();

  socket.on('data', (data) => dispatch(setSensorData(data)));

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
