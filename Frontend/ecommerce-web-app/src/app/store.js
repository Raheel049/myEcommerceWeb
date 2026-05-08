import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'; // Slice se reducer import kiya
import productReducer from "../features/product/productSlice.js"

export const store = configureStore({
  reducer: {
    // 'auth' key ke niche humne apna reducer register kar diya
    auth: authReducer, 
    product : productReducer,
  },
});