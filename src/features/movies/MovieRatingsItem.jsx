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
      <div className={style.closeContainer}>
        <p>&times;</p>
      </div>
    </div>
  );
}

export default MovieRatingsItem;
