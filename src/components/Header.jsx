import "./Header.css";

function Header({ pagina }) {
  return (
    <header className="topbar topbar-centralizada">
      <h2>{pagina}</h2>
    </header>
  );
}

export default Header;