import {configureStore} from "@reduxjs/toolkit";
import categorySlice from "./features/categorySlice";

export const store = configureStore({
    reducer: {categorySlice},
})