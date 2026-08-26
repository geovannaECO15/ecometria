function Header({
  pagina,
  perfil,
  setPerfil,
}) {
  const visitante =
    perfil === "Visitante";

  return (
    <header className="topbar">

      <h2>{pagina}</h2>

      <div className="area-usuario">

        {/* Apenas para testar os perfis durante o protótipo */}

        <div className="seletor-perfil">

          <label>
            Visualizar como
          </label>

          <select
            value={perfil}
            onChange={(e) =>
              setPerfil(e.target.value)
            }
          >
            <option>Visitante</option>
            <option>Administrador ECOMETRIA</option>
            <option>Administrador da Organização</option>
          </select>

        </div>

        {visitante ? (
          <button
            type="button"
            className="botao-login-publico"
          >
            Entrar
          </button>
        ) : (
          <div className="usuario">
            Usuário
          </div>
        )}

      </div>

    </header>
  );
}

export default Header;