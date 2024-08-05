import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        NowPlaying:null,
        trailerVideo:null,
    },
    reducers:{
        addMovies:(state,action) => {
         state.NowPlaying = action.payload
        },
        addMovieTrailer:(state,action) => {
            state.trailerVideo = action.payload
        }
    }
})

export const {addMovies,addMovieTrailer} = moviesSlice.actions;
export default moviesSlice.reducer;