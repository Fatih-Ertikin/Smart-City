import { configureStore } from '@reduxjs/toolkit';
import plantSelectReducer from '../components/plantSelect/redux/PlantSelect';
import groundMoistureReducer from '../components/moistureSensor/slices/MoistureSensorSlice';

export const store = configureStore({
  reducer: {
    selectedPlant: plantSelectReducer,
    moistureSensor: groundMoistureReducer,
  },
});

export default store;
