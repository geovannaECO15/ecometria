function Sidebar({
  pagina,
  setPagina,
  perfil,
}) {
  const visitante =
    perfil === "Visitante";

  const adminEcometria =
    perfil === "Administrador ECOMETRIA";

  const adminOrganizacao =
    perfil === "Administrador da Organização";

  return (
    <aside className="sidebar">

      <div className="logo">
        <h1>ECOMETRIA</h1>
        <p>Economia Circular</p>
      </div>

      <nav>

        {/* =====================
            ACESSO PÚBLICO
        ===================== */}

        <div className="menu-grupo">

          <span className="menu-titulo">
            ECOMETRIA
          </span>

          <button
            className={
              pagina === "Início"
                ? "menu-ativo"
                : ""
            }
            onClick={() =>
              setPagina("Início")
            }
          >
            Início
          </button>

          <button
            className={
              pagina === "Dashboard ECOMETRIA"
                ? "menu-ativo"
                : ""
            }
            onClick={() =>
              setPagina("Dashboard ECOMETRIA")
            }
          >
            Dashboard ECOMETRIA
          </button>

        </div>


        {/* =====================
            ORGANIZAÇÃO
        ===================== */}

        {adminOrganizacao && (
          <div className="menu-grupo">

            <span className="menu-titulo">
              MINHA ORGANIZAÇÃO
            </span>

            <button
              className={
                pagina === "Dashboard da Organização"
                  ? "menu-ativo"
                  : ""
              }
              onClick={() =>
                setPagina("Dashboard da Organização")
              }
            >
              Dashboard da Organização
            </button>

          </div>
        )}


        {/* =====================
            OPERAÇÃO
        ===================== */}

        {!visitante && (
          <div className="menu-grupo">

            <span className="menu-titulo">
              OPERAÇÃO
            </span>

            <button
              className={
                pagina === "Pontos de Coleta"
                  ? "menu-ativo"
                  : ""
              }
              onClick={() =>
                setPagina("Pontos de Coleta")
              }
            >
              Pontos de Coleta
            </button>

            <button
              className={
                pagina === "Eventos / Coletas"
                  ? "menu-ativo"
                  : ""
              }
              onClick={() =>
                setPagina("Eventos / Coletas")
              }
            >
              Eventos / Coletas
            </button>

            <button
              className={
                pagina === "Movimentações"
                  ? "menu-ativo"
                  : ""
              }
              onClick={() =>
                setPagina("Movimentações")
              }
            >
              Movimentações
            </button>

            <button
              className={
                pagina === "Destinações"
                  ? "menu-ativo"
                  : ""
              }
              onClick={() =>
                setPagina("Destinações")
              }
            >
              Destinações
            </button>

            <button
              className={
                pagina === "Documentos"
                  ? "menu-ativo"
                  : ""
              }
              onClick={() =>
                setPagina("Documentos")
              }
            >
              Documentos
            </button>

            <button
              className={
                pagina === "Equipamentos"
                  ? "menu-ativo"
                  : ""
              }
              onClick={() =>
                setPagina("Equipamentos")
              }
            >
              Equipamentos
            </button>

            <button
              className={
                pagina === "Inconsistências"
                  ? "menu-ativo"
                  : ""
              }
              onClick={() =>
                setPagina("Inconsistências")
              }
            >
              Inconsistências
            </button>

          </div>
        )}


        {/* =====================
            GESTÃO
        ===================== */}

        {!visitante && (
          <div className="menu-grupo">

            <span className="menu-titulo">
              GESTÃO
            </span>

            {adminEcometria && (
              <button
                className={
                  pagina === "Solicitações de Cadastro" ||
                  pagina === "Análise de Cadastro"
                    ? "menu-ativo"
                    : ""
                }
                onClick={() =>
                  setPagina("Solicitações de Cadastro")
                }
              >
                Solicitações de Cadastro
              </button>
            )}

            {adminEcometria && (
              <button
                className={
                  pagina === "Organizações" ||
                  pagina === "Detalhes da Organização"
                    ? "menu-ativo"
                    : ""
                }
                onClick={() =>
                  setPagina("Organizações")
                }
              >
                Organizações
              </button>
            )}

            <button
              className={
                pagina === "Usuários" ||
                pagina === "Novo Usuário"
                  ? "menu-ativo"
                  : ""
              }
              onClick={() =>
                setPagina("Usuários")
              }
            >
              Usuários
            </button>

            <button
              className={
                pagina === "Relatórios"
                  ? "menu-ativo"
                  : ""
              }
              onClick={() =>
                setPagina("Relatórios")
              }
            >
              Relatórios
            </button>

            {adminEcometria && (
              <button
                className={
                  pagina === "Configurações"
                    ? "menu-ativo"
                    : ""
                }
                onClick={() =>
                  setPagina("Configurações")
                }
              >
                Configurações
              </button>
            )}

          </div>
        )}

      </nav>

    </aside>
  );
}

export default Sidebar;