import { useSelector } from "react-redux";
import style from "./MoviesDetails.module.css";
export default function MoviesDetails() {
  const { selectedMovie } = useSelector((store) => store.movies);
  return (
    <div className={style.movieDetails}>
      {selectedMovie && (
        <>
          <div className={style.imageContainer}>
            <img
              className={style.image}
              src={selectedMovie?.Poster}
              alt="movie poster"
            />
          </div>
          <div className={style.textContainer}>
            <div className={style.container}>
              <h2 className={style.title}>
                {selectedMovie.Title} rating:
                <span> {selectedMovie.Metascore}</span>
              </h2>
              <div className={style.movieInfoContainer}>
                <span className={style.released}>{selectedMovie.Released}</span>
                <span className={style.movieLength}>
                  {selectedMovie.Runtime}
                </span>
              </div>

              <p className={style.genre}>{selectedMovie.Genre}</p>

              <p className={style.description}>{selectedMovie.Plot}</p>
              <p className={style.actors}>Actors: {selectedMovie.Actors}</p>
              <p className={style.directedBy}>
                Directed by: {selectedMovie.Director}
              </p>
            </div>
          </div>
        </>
      )}
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
