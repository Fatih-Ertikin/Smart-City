/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { socket } from '../../../websocket';

export const refreshDataAsync = createAsyncThunk(
  'refreshSensorData',
  () => new Promise((resolve, reject) => {
    try {
      socket.emit('raspberry:cmd:readTemp', null, async (temp) => socket.emit('raspberry:cmd:readSoilMoisture', null, async (soilMoisture) => resolve({ temp, soilMoisture })));
    } catch (err) {
      return reject(err);
    }
  }),
);

export const RefreshButtonSlice = createSlice({
  name: 'waterButton',
  initialState: {
    temperature: 22.11,
    soilMoisture: 22.63,
  },
  extraReducers: {
    [refreshDataAsync.fulfilled]: (state, action) => {
      state.temperature = action.payload;
      console.log(action);
      state.soilMoisture = (Math.random() * (22.000 - 24.000) + 24.000).toFixed(2);
    },
  },
});

export default RefreshButtonSlice.reducer;
