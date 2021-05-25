/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const PlantSelectSlice = createSlice({
  name: 'plantInformation',
  initialState: {
    selectedPlant: {
      id: 0,
      name: '',
      idealGroundMoisture: 0,
      idealGrowthTemperature: 0,
    },
  },
  reducers: {
    setSelectedPlant: (state, action) => {
      state.selectedPlant += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setSelectedPlant,
} = PlantSelectSlice.actions;

export default PlantSelectSlice.reducer;
