import MoviesDetails from "../features/movies/MoviesDetails";
import MoviesRatings from "../features/movies/MoviesRatings";
import MoviesList from "../features/movies/MoviesList";
import style from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={style.container}>
      <MoviesList />
      <MoviesDetails />
      <MoviesRatings />
    </div>
  );
}
