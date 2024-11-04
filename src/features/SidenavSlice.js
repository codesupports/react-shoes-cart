import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dbData from '../db/data'
// Create an async thunk for fetching data
// export const fetchData = createAsyncThunk('data', async () => {
//     const response = await fetch(dbData); // Replace with your API
//     // if (!response.ok) {
//     //   throw new Error('Network response was not ok');
//     // }
//     console.log('sss', response)
//     return response.json();
    
//   });

const sideNavSlice = createSlice({
    name: 'sideNavSlice',
    initialState: {
        data: dbData,
        loading: false,
        error: null,
        slectedCatagory:'',
        priceRange:0,
        color:'',
        // filterDataList:dbData
      },
    reducers: {
        categoryData: (state, action) => {
            state.slectedCatagory = action.payload;
        },
        priceRangeData:(state, action) => {
            state.priceRange = action.payload;
        },
        categoryColor: (state, action) => {
            state.color = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //       .addCase(fetchData.pending, (state) => {
    //         state.loading = true;
    //         state.error = null;
    //         console.log('data1--',data)
    //       })
    //       .addCase(fetchData.fulfilled, (state, action) => {
    //         state.loading = false;
    //         state.data = action.payload;
    //         console.log('data2--',data)
    //       })
    //       .addCase(fetchData.rejected, (state, action) => {
    //         state.loading = false;
    //         state.error = action.error.message;
            
    //       });
    //   },
})

export const { categoryData, priceRangeData, categoryColor } = sideNavSlice.actions;
export default sideNavSlice.reducer;