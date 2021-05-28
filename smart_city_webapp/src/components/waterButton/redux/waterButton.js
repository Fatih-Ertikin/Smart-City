/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { socket } from '../../../websocket';

export const refreshAsync = createAsyncThunk(
  'refreshSensorData',
  async () => {
    socket.emit('raspberry:cmd:readTemp', null, async (err, res) => {
      console.log(err);
      console.log(res);
      return Promise.resolve(err);
    });
  },
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
      console.log(action);
      state.temperature = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  refreshSensorData,
} = WaterButtonSlice.actions;

export default WaterButtonSlice.reducer;
