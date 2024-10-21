import { createSlice } from "@reduxjs/toolkit";

export const SearchSlice= createSlice({
    name:"search",
    initialState:{
        search:" "
    },

    reducers:{
        searchItem:(state,action)=>{
            state.search= action.payload;
        },
    }
})

export const {searchItem}=SearchSlice.actions;
export default SearchSlice.reducer;