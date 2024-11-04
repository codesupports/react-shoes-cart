import { configureStore } from "@reduxjs/toolkit";
import SidenavSlice from "../features/SidenavSlice";

const store = configureStore({
    reducer: {
        sideNavSlice: SidenavSlice
    }
})

export default store;