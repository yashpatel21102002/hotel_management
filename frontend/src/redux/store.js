import { configureStore } from '@reduxjs/toolkit'
import hotelSlice from './hotel.js'

const store = configureStore({
    reducer: {
        hotel: hotelSlice
    }
})

export default store