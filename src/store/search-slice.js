import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
    name: "search",
    initialState: {searchText: ""},
    reducers:{
        clearSearch: (state)=>{
            state.searchText = "";
        },
        submitSearch: (state,action)=>{
            state.searchText = action.payload;
        }
    }
})

export const { clearSearch, submitSearch } = searchSlice.actions;
export default searchSlice;