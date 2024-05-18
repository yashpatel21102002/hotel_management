import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Action
export const fetchHotel = createAsyncThunk('hotel/fetchHotel', async (hotelId, { rejectWithValue }) => {
    try {
        console.log("Fetching hotel data for ID:", hotelId);
        const response = await axios.get(`http://localhost:8080/api/hotel/${hotelId}`);
        return response.data; // Return the correct data from response
    } catch (error) {
        console.error("Error fetching hotel data:", error);
        return rejectWithValue(error.response.data);
    }
});

const hotelSlice = createSlice({
    name: 'hotel',
    initialState: {
        loading: false,
        hotelData: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchHotel.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchHotel.fulfilled, (state, action) => {
            state.loading = false;
            state.hotelData = action.payload;
            state.error = null;
        });
        builder.addCase(fetchHotel.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export default hotelSlice.reducer;
