import style from "./Header.module.css";
export default function Header() {
  return (
    <header className={style.header}>
      <p>Logo</p>
      <input type="text" placeholder="Search..." />
    </header>
  );
}
