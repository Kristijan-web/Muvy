import { useFetcher } from "react-router-dom";
import style from "./MovieRatingsItem.module.css";
function MovieRatingsItem({ movie }) {
  const fetcher = useFetcher();

  return (
    <div className={style.itemContainer}>
      <div>
        <img src={movie.Poster} alt="movie poster" />
      </div>
      <div>
        <p>{movie.Title}</p>
        <p>{movie.Year}</p>
      </div>
      <div>
        <p>{movie.selectedRating}</p>

        <ion-icon
          style={{
            color: "yellow",
            fill: "yellow",
            stroke: "yellow",
            width: "3.2rem",
            height: "3.2rem",
            display: "inline-block",
          }}
          name="star"
        ></ion-icon>
      </div>
      <fetcher.Form method="POST" className={style.closeContainer}>
        <input type="hidden" value={JSON.stringify(movie.imdbID)} name="id" />
        <button type="submit">&times;</button>
      </fetcher.Form>
    </div>
  );
}

export default MovieRatingsItem;
//   Actors
// Awards
// BoxOffice
// Country
// DVD
// Director
// Genre
// Language
// Metascore
// Plot
// Poster
// Production
// Rated
// Ratings
// Released
// Response
// Runtime
// Title
// Type
// Website
// Writer
// Year
// imdbID
// imdbRating
// imdbVotes
