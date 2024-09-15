import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./features/movies/MoviesSlice";

const store = configureStore({
  reducer: {
    movies: moviesSlice,
  },
});

export default store;
