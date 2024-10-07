import { useLoaderData } from "react-router-dom";
import style from "./MoviesRatings.module.css";
import MovieRatingsItem from "./MovieRatingsItem";
export default function MoviesRatings() {
  // moram da izucem niz ratedMovie-a iz localStorage-a
  // ako bih koristio useEffect onda bi se podaci dohvatili samo na inicijalnom renderu, a sta ako korisnik tokom rada sa aplikacijom doda novi film....

  // Ideja:
  // mozda da radim sa loaderom, i da koristim fecher.Form, kada se klikne na submit dugme, ponovo se trigeruje loader koji ce dohvatiti filmove iz localStorage
  const movies = useLoaderData();

  // racune avg ratinga

  const avg = movies.reduce(function (acc, value) {
    return acc + value.selectedRating;
  }, 0);

  return (
    <div className={style.moviesRatings}>
      <div className={style.badge}>
        <div>
          <ion-icon name="videocam-outline"></ion-icon>

          <span>{movies.length === 0 ? 0 : movies.length} </span>
        </div>
        <div>
          <ion-icon name="star-half-outline"></ion-icon>
          <span>{(avg / movies.length).toFixed(1)}</span>
        </div>
      </div>
      {(!movies || movies?.length === 0) && (
        <p className={style.movieIntro}>Movies you rated are displayed here</p>
      )}
      {movies?.map(function (el, i) {
        return <MovieRatingsItem movie={el} key={i} />;
      })}
    </div>
  );
}
