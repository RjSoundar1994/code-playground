import { configureStore } from '@reduxjs/toolkit';
import storeReducer from './storeSlice';

export const store = configureStore({
  devTools: import.meta.env.DEV,  // disable devtools in production
  reducer: {
    amazonInfo: storeReducer,
  },
});
