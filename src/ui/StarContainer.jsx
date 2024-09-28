import style from "./StarContainer.module.css";
import { useState } from "react";
import Star from "./Star";
import { useSelector } from "react-redux";
import { useFetcher } from "react-router-dom";
export default function StarContainer() {
  const [rating, setRating] = useState("");
  const [chosenRating, setChosenRating] = useState("");
  const { selectedMovie } = useSelector((store) => store.movies);

  const fetcher = useFetcher();
  // hocu da hover ima prednost u odnosu na klik, da ako postji click i izadje se iz containera da se prikaze izabrani broj zvezdica

  function handleSelectedMovie() {}
  function handleChosenRating(rating) {
    setChosenRating(rating);
  }
  function handleStarNumber(number) {
    setRating(number);
  }
  function handleLeave() {
    setRating(chosenRating);
  }
  return (
    <div className={style.testContainer} onMouseLeave={handleLeave}>
      <span className={style.userRating}>Your rating:</span>
      {new Array(5).fill(null).map(function (el, i) {
        return (
          <Star
            rating={rating}
            handleStarNumber={handleStarNumber}
            handleChosenRating={handleChosenRating}
            starNumber={i + 1}
            key={i}
          />
        );
      })}
      {chosenRating && (
        <fetcher.Form method="POST">
          <input
            type="hidden"
            value={JSON.stringify(selectedMovie)}
            name="selectedMovie"
          />
          <button type="submit" className={style.button}>
            Confirm
          </button>
        </fetcher.Form>
      )}
    </div>
  );
}
