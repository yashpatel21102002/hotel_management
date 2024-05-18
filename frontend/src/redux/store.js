import { configureStore } from '@reduxjs/toolkit'
import hotelSlice from './hotel.js'
import cartSlice from './cart.js'

const store = configureStore({
    reducer: {
        hotel: hotelSlice,
        cart: cartSlice
    }
})

export default store