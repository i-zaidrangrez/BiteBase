import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addToCart = createAsyncThunk('/addtocart',async (data,thunkAPI) => {
    try {
        const res = await axios.post('http://localhost:3000/cart/v1/addtocart',data)
        return res.data
    } catch (error) { 
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Something Went Wrong") 
    }
})

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        loading : false,
        error : null
    }
})

export default cartSlice.reducer