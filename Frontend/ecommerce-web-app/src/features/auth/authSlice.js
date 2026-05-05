import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utiles/axiosInstance';

// Thunk for signup
export const signUpUser = createAsyncThunk(
  'auth/signUpUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/user/sign-up', userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Signup Failed");
    }
  }
);

export const loginUser = createAsyncThunk("auth/loginUser", async (credentials,{rejectWithValue}) => {
    try {
        const response = await axiosInstance.post("/user/log-in",credentials)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || "Login failed");
    }
})

// Aapka Slice bhi yahan rahega
const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, loadingSignUp: false, loadingLogin : false, error: null },

//   SignUp Cases

  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => { state.loadingSignUp = true; })
      .addCase(signUpUser.fulfilled, (state, action) => { 
          state.loadingSignUp = false; 
          state.user = action.payload.data; 
      })
      .addCase(signUpUser.rejected, (state, action) => { 
          state.loadingSignUp = false; 
          state.error = action.payload; 
      })

      //   Login Cases

  .addCase(loginUser.pending, (state) => {state.loadingLogin = true; })
  .addCase(loginUser.fulfilled, (state, action) => {
    state.loadingLogin = false;
    state.user = action.payload.data;
  })
  .addCase(loginUser.rejected, (state, action) => {
    state.loadingLogin = false;
    state.error = action.payload;
  })

  },



});

export default authSlice.reducer;