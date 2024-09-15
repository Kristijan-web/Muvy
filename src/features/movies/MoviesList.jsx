import MovieItem from "./MovieItem";
import style from "./MoviesList.module.css";
export default function MoviesList() {
  return (
    <div className={style.moviesList}>
      {new Array(5).fill(null).map(function (el, i) {
        return <MovieItem key={i} />;
      })}
    </div>
  );
}
