import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../config/api";

export const addToCart = createAsyncThunk(
  "cart/addtocart",
  async (data, thunkAPI) => {
    try {
      const res = await api.post(`/cart/v1/addtocart`, data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Something Went Wrong",
      );
    }
  },
);

export const getCart = createAsyncThunk(
  "cart/getcart",
  async (data, thunkAPI) => {
    try {
      const res = await api.post(`/cart/v1/getcart`, data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Something Went Wrong",
      );
    }
  },
);

export const removeItemFromCart = createAsyncThunk(
  "cart/removeItem",
  async (data, thunkAPI) => {
    try {
      const res = await api.patch(`/cart/v1/removeitem`, data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Something Went Wrong",
      );
    }
  },
);

export const increaseQuantity = createAsyncThunk(
  "cart/increasequantity",
  async (data, thunkAPI) => {
    try {
      const res = await api.patch(`/cart/v1/increasequantity`, data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Something Went Wrong",
      );
    }
  },
);

export const decreaseQuantity = createAsyncThunk(
  "cart/decreasequantity",
  async (data, thunkAPI) => {
    try {
      const res = await api.patch(`/cart/v1/decreasequantity`, data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Something Went Wrong",
      );
    }
  },
);

export const clearCart = createAsyncThunk(
  "cart/clearcart",
  async (data, thunkAPI) => {
    try {
      const res = await api.patch(`/cart/v1/clearcart`, data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Something Went Wrong",
      );
    }
  },
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: {
      items: [],
      totalCartPrice: 0,
    },
    loading: false,
    error: null,
    success: null,
  },

  extraReducers: (builder) => {
    builder.addMatcher(
      (action) =>
        action.type.startsWith("cart/") && action.type.endsWith("/pending"),
      (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      },
    );

    builder.addMatcher(
      (action) =>
        action.type.startsWith("cart/") && action.type.endsWith("/fulfilled"),
      (state, action) => {
        state.loading = false;
        state.cart = action.payload.cart;
        state.success = action.payload.message;
        state.error = null;
      },
    );

    builder.addMatcher(
      (action) =>
        action.type.startsWith("cart/") && action.type.endsWith("/rejected"),
      (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = null;
      },
    );
  },
});

export default cartSlice.reducer;
