import MoviesDetails from "../features/movies/MoviesDetails";
import MoviesRatings from "../features/movies/MoviesRatings";
import MoviesList from "../features/movies/MoviesList";
import style from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={style.container}>
      <MoviesList />
      <MoviesDetails />
      <MoviesRatings />
    </div>
  );
}

export async function loader() {
  if (localStorage?.getItem("movies")) {
    const moviesLocal = JSON.parse(localStorage.getItem("movies"));
    return moviesLocal;
  }
  return null;
}
export async function action({ request }) {
  console.log("eee upao u action");
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const { selectedMovie, selectedRating, id } = data;
  let objectMovie = JSON.parse(selectedMovie);
  const objectSelectedRating = JSON.parse(selectedRating);
  objectMovie.selectedRating = objectSelectedRating;

  //proveri da li u localStorage postoji key "movies"
  if (localStorage?.getItem("movies")) {
    const getLocalMovies = localStorage.getItem("movies");
    const localMovies = JSON.parse(getLocalMovies);
    //napravi da ne mogu dva ista da se dodaju dva ista filma
    if (
      localMovies.some(function (el, i) {
        return el.imdbID === objectMovie.imdbID;
      })
    ) {
      // u ovaj if se upada ako postoji vec film u localStorage-u, ali ako postoji samo dodaj novi selectedRating
      let newMovies = localMovies.filter(function (movie) {
        return movie.imdbID != objectMovie.imdbID;
      });
      newMovies.push(objectMovie);
      localStorage.setItem("movies", JSON.stringify(newMovies));
      return null;
    }
    localStorage.setItem(
      "movies",
      JSON.stringify([...localMovies, objectMovie])
    );
  }
  //ako ne postoji napravi novi key movies
  else {
    localStorage.setItem("movies", JSON.stringify([objectMovie]));
    return null;
  }
  return null;
}
