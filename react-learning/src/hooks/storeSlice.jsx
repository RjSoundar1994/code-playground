import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user: { 
        name: localStorage.getItem('userName') || null, 
        cin: '',
         email: '' 
        },
    token: localStorage.getItem('token') || null,
    isAuthenticated: !!localStorage.getItem('token'),
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
            state.user.name = action.payload?.user?.userName;
            state.user.email = action.payload?.user?.email;
            state.token = action.payload.token;
            state.cartInfo = [];
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('userName', action.payload.user.userName)
        },
        removeloginUserCase(state, action) {
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticated = false;
            state.cartInfo = [];
            localStorage.clear();
        },
        // Logout
        userLogoutCase(state, action) {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            state.cartInfo = [];
            localStorage.clear();
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
            const removeItems = action.payload;
            state.cartInfo = state.cartInfo.filter((item) => item.id !== removeItems.id)
        }
    }
})
export const { clearError, loginUserCase, removeloginUserCase, userLogoutCase, addCartCase, removeCartCase } = storeSlice.actions;
export default storeSlice.reducer;