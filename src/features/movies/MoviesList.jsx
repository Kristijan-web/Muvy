import { useSelector } from "react-redux";
import MovieItem from "./MovieItem";
import style from "./MoviesList.module.css";
export default function MoviesList() {
  // status, error

  const { movies, status } = useSelector((store) => store.movies);

  return (
    <div className={style.moviesList}>
      {status === "loading" ? (
        <span className={style.loader}></span>
      ) : (
        movies?.map(function (movie, i) {
          return <MovieItem movie={movie} key={i} />;
        })
      )}
    </div>
  );
}
