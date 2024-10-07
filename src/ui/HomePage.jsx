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
  // dohvatanje podataka sa input-a
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // destruktirsanje podataka sa input-a i pretvraranje u objekat

  // stavljen je JSON.stringify kao default jer kada se brise movie iz watch list-e on pokusava da destrukturise property-e selectedMovie i selectedRating koji nisu prosledjeni
  const {
    selectedMovie = JSON.stringify({ test: 1 }),
    selectedRating = JSON.stringify({ test: 1 }),
    id = false,
  } = data;
  let objectMovie = JSON.parse(selectedMovie);
  const objectSelectedRating = JSON.parse(selectedRating);
  const idObject = JSON.parse(id);

  // dodavanje izabranog ratinga za izabrani film
  objectMovie.selectedRating = objectSelectedRating;

  // provera da li se vec podaci nalaze u local storage-u
  if (localStorage?.getItem("movies")) {
    const getLocalMovies = localStorage.getItem("movies");
    const localMovies = JSON.parse(getLocalMovies);
    // ako je prosledjen idObject znaci da izabrani film treba da se izbrise
    if (idObject) {
      console.log("eee");
      const removedSelectedMovie = localMovies.filter(function (movie) {
        return movie.imdbID != idObject;
      });
      localStorage.setItem("movies", JSON.stringify(removedSelectedMovie));
      return null;
    }

    // if proverava da li se isti film nalazi u localStorage-u, i ako se nalazi ponoce ce da ga ubaci sa novim rating-om
    if (
      localMovies.some(function (el, i) {
        return el.imdbID === objectMovie.imdbID;
      })
    ) {
      let newMovies = localMovies.filter(function (movie) {
        return movie.imdbID != objectMovie.imdbID;
      });
      // pushuje se novi film sa novim rating-om
      newMovies.push(objectMovie);
      localStorage.setItem("movies", JSON.stringify(newMovies));
      return null;
    }
    // ovaj deo se izvrsava kada postoji 'movies' key u localStorage-u i izabrani film se ne nalazi u njemu
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
