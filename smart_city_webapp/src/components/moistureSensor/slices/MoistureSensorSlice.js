/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const MoistureSensorSlice = createSlice({
  name: 'moistureSensor',
  initialState: {
    groundMoisture: 0,
  },
  reducers: {
    increment: (state) => {
      state.groundMoisture += 1;
    },
    decrement: (state) => {
      state.groundMoisture -= 1;
    },
    incrementByAmount: (state, action) => {
      state.groundMoisture += action.payload;
    },
    updateGroundMoisture: (state, action) => {
      state.groundMoisture = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  updateGroundMoisture,
} = MoistureSensorSlice.actions;

export default MoistureSensorSlice.reducer;
