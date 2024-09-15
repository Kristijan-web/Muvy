import { useDispatch } from "react-redux";
import style from "./Header.module.css";
import { useState } from "react";
import { fetchMovies } from "../features/movies/MoviesSlice";
export default function Header() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  function handleSearch(e) {
    setSearch(e.target.value);
    dispatch(fetchMovies(e.target.value));
  }

  return (
    <header className={style.header}>
      <p>Logo</p>
      <input
        value={search}
        onChange={handleSearch}
        type="text"
        placeholder="Search..."
      />
    </header>
  );
}
