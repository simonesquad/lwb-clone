import { configureStore } from "@reduxjs/toolkit";
// import basketReducer from "../slices/basketReducer";

// The global store set-up
export const store = configureStore({
    reducer: {
        basket: basketReducer,
    },
})