import { configureStore } from "@reduxjs/toolkit"; 
import authReducer from './authSlice.js' 
import guestReducer from './guestSlice.js'
import cartReducer from './cartSlice.js'

const store = configureStore({
    reducer : {
        auth : authReducer,
        guest : guestReducer,
        cart : cartReducer
    }
})

export default store