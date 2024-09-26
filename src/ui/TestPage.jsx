import style from "./TestPage.module.css";
export default function TestPage() {
  return (
    <div>
      {new Array(5).fill(null).map(function (star) {
        return <ion-icon class={style.star} name="star-outline"></ion-icon>;
      })}
    </div>
  );
}
