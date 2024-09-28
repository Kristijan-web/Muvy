import { useLoaderData } from "react-router-dom";
import style from "./MoviesRatings.module.css";
export default function MoviesRatings() {
  // moram da izucem niz ratedMovie-a iz localStorage-a
  // ako bih koristio useEffect onda bi se podaci dohvatili samo na inicijalnom renderu, a sta ako korisnik tokom rada sa aplikacijom doda novi film....

  // Ideja:
  // mozda da radim sa loaderom, i da koristim fecher.Form, kada se klikne na submit dugme, ponovo se trigeruje loader koji ce dohvatiti filmove iz localStorage
  const movies = useLoaderData();
  console.log(Object.entries(movies));
  return (
    <div className={style.moviesRatings}>
      <h2>Movies you rated</h2>
      <div className={style.moviesRatingsList}></div>
    </div>
  );
}
