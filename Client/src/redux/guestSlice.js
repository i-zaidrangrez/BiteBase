import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const session = createAsyncThunk('/session',async (data , thunkAPI)=>{
    try {
        const res = await axios.post('http://localhost:3000/session/v1/session',data)
        return res.data
    } catch (error) {
        console.log(error)
         return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Something went wrong"
      );
    }
})


const guestSlice = createSlice({
    name : "guest",
    initialState : {
        loading : false,
        error : null,
        sessionToken : null  
    },
    extraReducers: (builder)=>{
        builder.addCase(session.pending,(state,action)=>{
            state.loading = true
        }).addCase(session.fulfilled,(state , action)=>{
            localStorage.setItem('sessionToken',action.payload.session.sessionToken)
            state.loading = false
            localStorage.setItem('name',"Guest")
            localStorage.setItem('email',"Guest")
            localStorage.setItem('role',"Guest")
        }).addCase(session.rejected,(state,action)=>{
            state.error = action.payload
            console.log(action)
        })
    }
})

export default guestSlice.reducer