import { useSelector } from "react-redux";
import MovieItem from "./MovieItem";
import style from "./MoviesList.module.css";
export default function MoviesList() {
  // ako je broj fetchvanih filmova veci od 7 primeni css klasu overflow!
  const { movies, status } = useSelector((store) => store.movies);

  return (
    <div
      className={`${style.moviesList} ${
        movies?.length > 5 ? style.overflow : ""
      }`}
    >
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
