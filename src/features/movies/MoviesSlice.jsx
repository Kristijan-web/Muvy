import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  statusMovie: "idle",
  error: null,
  errorMovie: null,
  movies: [],
  selectedMovie: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded"; // Dodaj status za uspeh
        state.movies = action.payload.Search; // Pristupi odgovarajućem polju iz API responsa
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchMovieData.pending, (state) => {
        state.statusMovie = "loading";
      })
      .addCase(fetchMovieData.fulfilled, (state, action) => {
        state.statusMovie = "succeeded";
        state.selectedMovie = action.payload;
      })
      .addCase(fetchMovieData.rejected, (state, action) => {
        state.statusMovie = "failed";
        state.errorMovie = action.error.message;
      });
  },
});

export const fetchMovies = createAsyncThunk(
  "movies/setMovies",
  async function (payload) {
    // API KEY: df26f201
    //usage: http://www.omdbapi.com/?i=tt3896198&apikey=df26f201
    try {
      const fetchData = await fetch(
        `http://www.omdbapi.com/?s=${payload}&apikey=df26f201`
      );
      const data = await fetchData.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const fetchMovieData = createAsyncThunk(
  "movies/setMovie",
  async function (payload) {
    const fetchData = await fetch(
      `http://www.omdbapi.com/?i=${payload}&apikey=df26f201`
    );
    const data = await fetchData.json();
    return data;
  }
);

export function getMovies(state) {
  return state.movies;
}
export const { setMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
