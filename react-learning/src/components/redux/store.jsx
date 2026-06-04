import {configureStore} from "@reduxjs/toolkit";
import customerReducer from "./cartSlice";

export const store = configureStore({
    devTools: true,
    reducer: {
        cartInfo:customerReducer
    }
})