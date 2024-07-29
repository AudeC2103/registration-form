import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Importation du slice Redux

// Configuration du store avec le reducer 'user'
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
