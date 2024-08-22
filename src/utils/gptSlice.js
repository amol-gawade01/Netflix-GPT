import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
    },
    reducers:{
        toggleGptsearch:(state,action) =>{
            state.showGptSearch = !state.showGptSearch
        }
    }

})

export const {toggleGptsearch}  = gptSlice.actions;
export default gptSlice.reducer;