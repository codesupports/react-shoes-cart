import { createSlice } from "@reduxjs/toolkit";
import dbData from '../db/data'


const addToCartSlice = createSlice({
    name: 'addToCartSlice',
    initialState: {
        items: [],
    },
    reducers: {
        addToCartDataFunc: (state, action) => {
            state.items.push({ ...action.payload });
        },

    }
})

export const { addToCartDataFunc } = addToCartSlice.actions;
export default addToCartSlice.reducer;