import { configureStore } from '@reduxjs/toolkit'
import hotelSlice from './hotel.js'
import cartSlice from './cart.js'
import userSlice from './user.js'

const store = configureStore({
    reducer: {
        hotel: hotelSlice,
        cart: cartSlice,
        user:userSlice
    }
})

export default store