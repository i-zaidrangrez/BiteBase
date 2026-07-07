import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const login = createAsyncThunk('/auth/login',async(data , thunkAPI)=>{
    try {
        const res = await axios.post('http://localhost:3000/auth/v1/login',data)
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message) || "Something Went Wrong"
    }
})
export const logout = createAsyncThunk('/auth/logout',async(_ , thunkAPI)=>{
    try {
        // const res = await axios.post('http://localhost:3000/auth/v1/logout')
        localStorage.removeItem('AccessToken')
        localStorage.removeItem('name')
        localStorage.removeItem('role')
        localStorage.removeItem('email')
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message) || "Something Went Wrong"
    }
})

export const register = createAsyncThunk('/auth/register',async(data , thunkAPI)=>{
    try {
        const res = await axios.post('http://localhost:3000/auth/v1/register',data)
        return res.data
        console.log(res)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message) || "Something Went Wrong"
    }
})


const authSlice = createSlice({
    name  : "auth",
    initialState : {
        loading : false,
        error : null,
        name : null,
        email : null,
        role : null,
        accessToken : null,
        refreshToken : null
    },
    extraReducers : (builder)=>{
        builder.addCase(login.pending, (state , action)=>{
            state.loading = true
        }).addCase(login.fulfilled , (state , action) => {
            state.loading = false
            state.name = action.payload.user.name
            state.email = action.payload.user.email
            state.role = action.payload.user.role
            localStorage.setItem('name',state.name)
            localStorage.setItem('email',state.email)
            localStorage.setItem('role',state.role)
            state.accessToken = action.payload.user.accessToken
            state.refreshToken = action.payload.user.refreshToken
            localStorage.setItem('RefreshToken' , action.payload.user.refreshToken)
            localStorage.setItem('AccessToken' , action.payload.user.accessToken)

        }).addCase(login.rejected , (state , action) => {
            state.loading = false
            state.error = action.payload
            // console.log(action)
        })
        builder.addCase(register.pending, (state , action)=>{
            state.loading = true
        }).addCase(register.fulfilled , (state , action) => {
            state.loading = false
            state.name = action.payload.user.name
            state.email = action.payload.user.email
            state.role = action.payload.user.role
            localStorage.setItem('name',state.name)
            localStorage.setItem('email',state.email)
            localStorage.setItem('role',state.role)
            state.accessToken = action.payload.user.accessToken
            state.refreshToken = action.payload.user.refreshToken
            localStorage.setItem('RefreshToken' , action.payload.user.refreshToken)
            localStorage.setItem('AccessToken' , action.payload.user.accessToken)

        }).addCase(register.rejected , (state , action) => {
            state.loading = false
            state.error = action.payload
        })

        builder.addCase(logout.pending, (state , action)=>{
            state.loading = true
        }).addCase(logout.fulfilled , (state , action) => {
            state.loading = false
            localStorage.removeItem('AccessToken')

        }).addCase(logout.rejected , (state , action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export default authSlice.reducer