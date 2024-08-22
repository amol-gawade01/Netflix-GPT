import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name:"config",
    initialState:{
        currentLang:"hindi"
    },
    reducers:{
        changeLanguage:(state,action) => {
            state.currentLang = action.payload;
        }
    }
})

export const {changeLanguage} = configSlice.actions;
export default configSlice.reducer;