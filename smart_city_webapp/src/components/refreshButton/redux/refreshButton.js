/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { socket } from '../../../websocket';

export const refreshDataAsync = createAsyncThunk(
  'refreshSensorData',
  () => new Promise((resolve, reject) => {
    try {
      socket.emit('raspberry:cmd:readTemp', null, async (res) => resolve(res));
    } catch (err) {
      return reject(err);
    }
  }),
);

export const RefreshButtonSlice = createSlice({
  name: 'waterButton',
  initialState: {
    temperature: 0,
  },
  extraReducers: {
    [refreshDataAsync.fulfilled]: (state, action) => {
      state.temperature = action.payload;
    },
  },
});

export default RefreshButtonSlice.reducer;
