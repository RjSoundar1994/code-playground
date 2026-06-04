import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const customerSlice = createSlice({
    name: "addCart",
    initialState: initialState,
    reducers: {
        addCart(state, action) {
            console.log('state-action', action.payload)
            state.push(action.payload)
        }
    }
})

export const { addCart }= customerSlice.actions;
export default customerSlice.reducer;