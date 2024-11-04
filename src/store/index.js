import { configureStore } from "@reduxjs/toolkit";
import SidenavSlice from "../features/SidenavSlice";
import addToCartSlice from "../features/AddToCartSlice";

const store = configureStore({
    reducer: {
        sideNavSlice: SidenavSlice,
        addToCartSlice: addToCartSlice,
    }
})

export default store;