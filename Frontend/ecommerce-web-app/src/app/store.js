import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'; // Slice se reducer import kiya

export const store = configureStore({
  reducer: {
    // 'auth' key ke niche humne apna reducer register kar diya
    auth: authReducer, 
  },
});