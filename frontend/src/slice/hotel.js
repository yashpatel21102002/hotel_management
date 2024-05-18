import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


//Action
export const fetchHotel = createAsyncThunk('fetchHotel', async () => {
    const url = window.location.href
    let hotelId = url.split("/").pop();
    hotelId = parseInt(hotelId, 10)
    const hotelData = await axios.get("http://localhost:3000/" + hotelId)
    return hotelData.json()

})

const hotelSlice = createSlice({
    name: "hotel",
    initialState: {
        loading: false,
        hotelData: null,
        error: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchHotel.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(fetchHotel.fulfilled, (state, action) => {
            state.loading = false
            state.hotelData = action.payload
        })
        builder.addCase(fetchHotel.rejected, (state, action) => {
            console.log("error")
            state.loading = false
            state.error = true
        })


    }
})


export default hotelSlice.reducer;