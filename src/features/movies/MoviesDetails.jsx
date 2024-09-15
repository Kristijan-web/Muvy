import { useSelector } from "react-redux";
import style from "./MoviesDetails.module.css";
export default function MoviesDetails() {
  const { selectedMovie } = useSelector((store) => store.movies);
  return (
    <div className={style.moviesDetails}>
      <p>{selectedMovie?.Actors}</p>
    </div>
  );
}
// Actors;
// Awards;
// BoxOffice;
// Country;
// DVD;
// Director;
// Genre;
// Language;
// Metascore;
// Plot;
// Poster;
// Production;
// Rated;
// Ratings;
// Released;
// Response;
// Runtime;
// Title;
// Type;
// Website;
// Writer;
// Year;
// imdbID;
// imdbRating;
// imdbVotes;
