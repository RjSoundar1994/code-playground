import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    cartInfo: []
}
const storeSlice = createSlice({
    name: "storeInfo",
    initialState: initialState,
    reducers: {
        clearError: (state) => { state.error = null; },
        // Login
        loginUserCase(state, action) {
            console.log('payload', action.payload)
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.cartInfo = [];
        },
        removeloginUserCase(state, action) {
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticated = false;
            state.cartInfo = [];
        },
        // Logout
        userLogoutCase(state, action) {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            state.cartInfo = [];
        },
        // Cart Info
        addCartCase(state, action) {
            const exitItem = state.cartInfo.find((item) => { return item.id == action.payload.id })
            console.log('state.cartInfo', state.cartInfo)
            if (!exitItem) {
                state.cartInfo.push(action.payload)
            } else {
                alert(`you are attempting to add a product that is already sitting in your cart. product name :  ${action.payload.name}`)
            }
        },
        removeCartCase(state, action) {
            console.log('state-remove', action.payload)
            console.log('state.cartInfo', state.cartInfo)
            const removeItems = action.payload;
            state.cartInfo.filter((item) => item.id !== removeItems.id)
        }
    },
    // extraReducers: (builder) => {
    //     builder
    //         // Login
    //         .loginUserCase((state, action) => {
    //             state.loading = false;
    //             state.isAuthenticated = true;
    //             state.user = action.payload.user;
    //             state.token = action.payload.token;
    //         })
    //         .removeloginUserCase((state, action) => {
    //             state.loading = false;
    //             state.error = action.payload;
    //             state.isAuthenticated = false;
    //         })
    //         // Logout
    //         .userLogoutCase((state) => {
    //             state.user = null;
    //             state.token = null;
    //             state.isAuthenticated = false;
    //         })
    //         // Cart Info
    //         .addCartCase((state, action) => {
    //             const exitItem = state.find((item) => { return item.id == action.payload.id })
    //             if (!exitItem) {
    //                 state.cartInfo.push(action.payload)
    //             } else {
    //                 alert(`you are attempting to add a product that is already sitting in your cart. product name :  ${action.payload.name}`)
    //             }
    //         })
    // },
})
export const { clearError, loginUserCase, removeloginUserCase, userLogoutCase, addCartCase, removeCartCase } = storeSlice.actions;
export default storeSlice.reducer;