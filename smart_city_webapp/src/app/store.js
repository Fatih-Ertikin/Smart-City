import { configureStore } from '@reduxjs/toolkit';
import plantSelectReducer from '../components/plantSelect/redux/PlantSelect';
import groundMoistureReducer from '../components/moistureSensor/slices/MoistureSensorSlice';
import waterButtonReducer from '../components/waterButton/redux/waterButton';

export const store = configureStore({
  reducer: {
    selectedPlant: plantSelectReducer,
    moistureSensor: groundMoistureReducer,
    waterButton: waterButtonReducer,
  },
});

export default store;
