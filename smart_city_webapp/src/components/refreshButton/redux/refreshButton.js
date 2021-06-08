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
      state.temperature = action.payload.temp;
      console.log(action.payload);
      state.soilMoisture = action.payload.soilMoisture;
    },
  },
});

export default RefreshButtonSlice.reducer;
