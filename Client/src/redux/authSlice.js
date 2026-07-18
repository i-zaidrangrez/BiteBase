import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import { TrendingUpDown } from 'lucide-react'

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
        localStorage.removeItem('sessionToken')
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
export const findAccount = createAsyncThunk('/auth/findaccount',async(data , thunkAPI)=>{
    try {
        const res = await axios.post('http://localhost:3000/auth/v1/findaccount',data)
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message) || "Something Went Wrong"
    }
})
export const resetPassword = createAsyncThunk('/auth/reset-password',async(data , thunkAPI)=>{
    try {
        const res = await axios.patch('http://localhost:3000/auth/v1/reset-password',data)
        console.log(res)
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message) || "Something Went Wrong"
    }
})


const authSlice = createSlice({
    name  : "auth",
    initialState : {
        success : null,
        loading : false,
        error : null,
        user : null,
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
            state.user = action.payload.user
            localStorage.setItem('userId',action.payload.user.id)
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
        builder.addCase(findAccount.pending, (state , action)=>{
            state.loading = true
        }).addCase(findAccount.fulfilled , (state , action) => {
            state.error = null
            state.success = action.payload.message
            state.loading = false
        }).addCase(findAccount.rejected , (state , action) => {
            state.success = false
            state.loading = false
            state.error = action.payload
        })
        builder.addCase(resetPassword.pending, (state , action)=>{
            state.loading = true
        }).addCase(resetPassword.fulfilled , (state , action) => {
            state.error = null
            console.log(action)
            state.success = action.payload.message
            state.loading = false
        }).addCase(resetPassword.rejected , (state , action) => {
            state.success = false
            state.loading = false
            state.error = action.payload
            console.log(state.error)
        })
    }
})

export default authSlice.reducer