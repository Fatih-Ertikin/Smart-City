/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { socket } from '../../../websocket';

export const WaterButtonSlice = createSlice({
  name: 'waterButton',
  initialState: {
    isWatering: false,
  },
  reducers: {
    giveWater: (state, action) => {
      state.isWatering = true;
      socket.emit('REQUEST_GIVE_WATER', {
        data: action.payload,
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  giveWater,
} = WaterButtonSlice.actions;

export default WaterButtonSlice.reducer;
