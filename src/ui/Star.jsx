import style from "./Star.module.css";
export default function Star({
  starNumber,
  handleStarNumber,
  rating,
  handleChosenRating,
}) {
  function handleAction() {
    handleStarNumber(starNumber);
  }
  function handleClick() {
    handleChosenRating(starNumber);
  }
  if (starNumber <= rating) {
    return (
      <span
        className={style.starContainer}
        onMouseEnter={handleAction}
        onClick={handleClick}
      >
        <ion-icon
          style={{ color: "yellow", width: "45px", height: "45px" }}
          name="star"
        ></ion-icon>
      </span>
    );
  } else {
    return (
      <span className={style.starContainer} onMouseEnter={handleAction}>
        <ion-icon
          style={{ color: "yellow", width: "45px", height: "45px" }}
          name="star-outline"
        ></ion-icon>
      </span>
    );
  }
}
