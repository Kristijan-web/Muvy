import { useDispatch } from "react-redux";
import style from "./MovieItem.module.css";
import { fetchMovieData } from "./MoviesSlice";
export default function MovieItem({ movie }) {
  const { Title, Poster, Type, Year, imdbID } = movie;
  const dispatch = useDispatch();
  // Title;
  // Poster;
  // Type;
  // Year
  // imdbID;
  function handleGetMovie() {
    dispatch(fetchMovieData(imdbID));
  }

  return (
    <div onClick={handleGetMovie} className={style.movieItem}>
      <div className={style.movieItemLeft}>
        <img className={style.movieImage} src={`${Poster}`} />
      </div>
      <div className={style.movieItemRight}>
        <p>{Title}</p>
        <p>{Year}</p>
      </div>
    </div>
  );
}
