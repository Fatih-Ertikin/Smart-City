/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { socket } from '../../../websocket';

export const refreshAsync = createAsyncThunk(
  'refreshSensorData',
  () => new Promise((resolve, reject) => {
    try {
      socket.emit('raspberry:cmd:readTemp', null, async (res) => resolve(res));
    } catch (err) {
      return reject(err);
    }
  }),
);

export const WaterButtonSlice = createSlice({
  name: 'waterButton',
  initialState: {
    temperature: 0,
  },
  reducers: {

  },
  extraReducers: {
    [refreshAsync.fulfilled]: (state, action) => {
      state.temperature = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  refreshSensorData,
} = WaterButtonSlice.actions;

export default WaterButtonSlice.reducer;
