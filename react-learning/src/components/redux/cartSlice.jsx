import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const customerSlice = createSlice({
    name: "addCart",
    initialState: initialState,
    reducers: {
        addCart(state, action) {
            console.log('state-action', action.payload)
            const exitItem = state.find((item) => { return item.id == action.payload.id})
            console.log('exitItem', exitItem)
            if (!exitItem) {
                state.push(action.payload)
            } else {
                alert(`you are attempting to add a product that is already sitting in your cart. product name :  ${action.payload.name}`)
            }
        },
        removeCart(state, action) {
            console.log('state-remove', action.payload)
            const removeItems = action.payload;
            return state.filter((item) => item.id !== removeItems.id)
        }
    }
})

export const { addCart, removeCart } = customerSlice.actions;
export default customerSlice.reducer;