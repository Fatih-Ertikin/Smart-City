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

      socket.emit('client:requestReadTemp', {
        data: action.payload,
      }, (err, res) => {
        console.log(err);
        console.log(res);
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  giveWater,
} = WaterButtonSlice.actions;

export default WaterButtonSlice.reducer;
