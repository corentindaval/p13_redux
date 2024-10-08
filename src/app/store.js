import { configureStore } from '@reduxjs/toolkit';
import token from '../features/token/token';

export const store = configureStore({
  reducer: {
   Token:token,
  },
});

