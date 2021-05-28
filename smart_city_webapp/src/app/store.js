import { configureStore } from '@reduxjs/toolkit';
import plantSelectReducer from '../components/plantSelect/redux/PlantSelect';
import groundMoistureReducer from '../components/moistureSensor/slices/MoistureSensorSlice';
import refreshButtonReducer from '../components/refreshButton/redux/refreshButton';

export const store = configureStore({
  reducer: {
    selectedPlant: plantSelectReducer,
    moistureSensor: groundMoistureReducer,
    refreshButton: refreshButtonReducer,
  },
});

export default store;
