import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: []
}


const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovie(state,action) {
            state.movies = action.payload;

        }
    }
})

export const  {setMovie} = moviesSlice.reducer;
export default moviesSlice