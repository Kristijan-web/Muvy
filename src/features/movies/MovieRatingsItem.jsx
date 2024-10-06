import style from "./MovieRatingsItem.module.css";
function MovieRatingsItem({ movie }) {
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
  return (
    <div className={style.itemContainer}>
      <div>
        <img src={movie.Poster} alt="movie poster" />
      </div>
      <div>
        <p>{movie.Title}</p>
        <p>{movie.Released}</p>
      </div>
      <div>
        <p>rating here</p>
      </div>
    </div>
  );
}

export default MovieRatingsItem;
