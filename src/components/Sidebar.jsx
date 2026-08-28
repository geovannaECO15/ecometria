import logoEcometria from "../assets/festa-junina/logo-ecometria.png";

function Sidebar({ pagina, setPagina }) {
  return (
    <aside className="sidebar">

      <div className="logo">

        <img
          src={logoEcometria}
          alt="ECOMETRIA"
          className="logo-ecometria"
        />

      </div>

      <nav>

        <div className="menu-grupo">

          <span className="menu-titulo">
            PLATAFORMA
          </span>

          <button
            className={pagina === "Início" ? "menu-ativo" : ""}
            onClick={() => setPagina("Início")}
          >
            Início
          </button>

          <button
            className={pagina === "Dashboard" ? "menu-ativo" : ""}
            onClick={() => setPagina("Dashboard")}
          >
            Dashboard
          </button>

        </div>

      </nav>

    </aside>
  );
}

export default Sidebar;