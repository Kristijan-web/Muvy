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
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  const { selectedMovie } = data;
  const objectMovie = JSON.parse(selectedMovie);
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
