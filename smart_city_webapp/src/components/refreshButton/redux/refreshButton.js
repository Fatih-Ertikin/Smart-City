/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { socket } from '../../../websocket';

export const refreshDataAsync = createAsyncThunk(
  'refreshSensorData',
  () => new Promise((resolve, reject) => {
    try {
      socket.emit('raspberry:cmd:readTemp', null, async (res) => resolve(res));
      // socket.emit('raspberry:cmd:readSoilMoisture', null, async (res) => resolve(res));
    } catch (err) {
      return reject(err);
    }
  }),
);

export const RefreshButtonSlice = createSlice({
  name: 'waterButton',
  initialState: {
    temperature: 0,
    soilMoisture: 0,
  },
  extraReducers: {
    [refreshDataAsync.fulfilled]: (state, action) => {
      state.temperature = action.payload;
      state.soilMoisture = (Math.random() * (22.000 - 24.000) + 24.000).toFixed(2);
    },
  },
});

export default RefreshButtonSlice.reducer;
