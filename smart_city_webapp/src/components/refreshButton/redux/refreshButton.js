/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { socket } from '../../../websocket';

export const refreshDataAsync = createAsyncThunk(
  'refreshSensorData',
  () => new Promise((resolve, reject) => {
    try {
      console.log('getting data...');
      socket.emit('getChartData', null, (data) => {
        console.log(data);
        resolve(data);
      });
    } catch (err) {
      return reject(err);
    }
  }),
);

export const RefreshButtonSlice = createSlice({
  name: 'waterButton',
  initialState: {
    temperature: 0.00,
    soilMoisture: 0.00,
    chartData: {},
  },
  reducers: {
    setSensorData: (state, action) => {
      state.soilMoisture = action.payload.soilMoisture;
      // eslint-disable-next-line prefer-destructuring
      state.temperature = action.payload.temp[0];
    },
  },
  extraReducers: {
    [refreshDataAsync.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.chartData = action.payload;
    },
  },
});

export const { setSensorData } = RefreshButtonSlice.actions;
export default RefreshButtonSlice.reducer;
