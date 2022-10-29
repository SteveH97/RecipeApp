import { configureStore } from "@reduxjs/toolkit";
import filtSlice from "./filter-slice";
import cartSlice from "./cart-slice";
import searchSlice from "./search-slice";

const store = configureStore({
    reducer: {
        filter: filtSlice.reducer,
        cart: cartSlice.reducer,
        search: searchSlice.reducer
    }
});

export default store;