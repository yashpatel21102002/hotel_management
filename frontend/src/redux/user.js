//making the user slice to store the name of the user into the state
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'cart',
    initialState: {
        name:"",
        contact:"",
    },
    reducers: {
        addName: (state, action) => {
            state.name = action.payload.name
            state.contact = action.payload.number
        }
    },
})


export const { addName } = userSlice.actions
export default userSlice.reducer