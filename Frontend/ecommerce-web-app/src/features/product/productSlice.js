import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utiles/axiosInstance';


// Thunk to add product
export const addProduct = createAsyncThunk(
  'product/addProduct',
  async (productData, { rejectWithValue }) => {
    try {
      // Kyunki hum image bhej rahe hain, isliye FormData use hoga
      const response = await axiosInstance.post('/admin/add-product', productData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Failed to add product");
    }
  }
);

export const fetchAllProducts = createAsyncThunk(
  'products/fetchAll',
 async (_, {rejectWithValue}) => {
    try {
      const res = await axiosInstance.get("/admin/all-products");
      return res.data.data
    } catch (error) {
      return(rejectWithValue(error.response.data.message || "Failed to get products"))
    }
  }
)

const productSlice = createSlice({
  name: 'product',
  initialState: { products: [], loading: false, error: null, success: false, searchQuery : "" },
  reducers: {

    setSearchQuery : (state, action) => {
        state.searchQuery = action.payload
    },

    resetStatus: (state) => {
      state.success = false;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state) => { state.loading = true; })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.products.push(action.payload.data);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchAllProducts.pending, (state) => {state.loading = true; })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false; 
        state.products = action.payload; 
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
      })



  }

  
});

export const { resetStatus, setSearchQuery } = productSlice.actions;
export default productSlice.reducer;