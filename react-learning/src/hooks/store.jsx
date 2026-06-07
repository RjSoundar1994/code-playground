import { configureStore } from "@reduxjs/toolkit";
import storeInfo from "./storeSlice"
export const store = configureStore({
    devTools: true,
    reducer: {
        amazonInfo: storeInfo
    }
})