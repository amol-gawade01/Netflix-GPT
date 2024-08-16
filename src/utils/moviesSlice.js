import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        NowPlaying:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        trailerVideo:null,
    },
    reducers:{
        addMovies:(state,action) => {
         state.NowPlaying = action.payload
        },
        addpopularMovies:(state,action) => {
            state.popularMovies = action.payload
        },
        addtopRatedMovies:(state,action) => {
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies:(state,action) => {
            state.upcomingMovies = action.payload
           },
        addMovieTrailer:(state,action) => {
            state.trailerVideo = action.payload
        }
    }
})

export const {addMovies,addMovieTrailer,addUpcomingMovies,addpopularMovies,addtopRatedMovies} = moviesSlice.actions;
export default moviesSlice.reducer;