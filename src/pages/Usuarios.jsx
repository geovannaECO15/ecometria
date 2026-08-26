function Usuarios({ setPagina }) {
  return (
    <div>

      <div className="cabecalho-pagina">
        <div>
          <h2>Usuários</h2>

          <p>
            Gerenciamento das pessoas autorizadas a acessar a ECOMETRIA.
          </p>
        </div>

        <button
          className="botao-principal"
          onClick={() => setPagina("Novo Usuário")}
        >
          + Novo Usuário
        </button>
      </div>

      <div className="resumo-solicitacoes">

        <div className="mini-card">
          <span>Usuários ativos</span>
          <strong>--</strong>
        </div>

        <div className="mini-card">
          <span>Administradores</span>
          <strong>--</strong>
        </div>

        <div className="mini-card">
          <span>Operacionais</span>
          <strong>--</strong>
        </div>

        <div className="mini-card">
          <span>Inativos</span>
          <strong>--</strong>
        </div>

      </div>

      <div className="filtros-usuarios">

        <div className="campo campo-pesquisa-usuario">
          <label>Pesquisar</label>

          <input
            type="text"
            placeholder="Nome, e-mail ou organização"
          />
        </div>

        <div className="campo">
          <label>Organização</label>

          <select defaultValue="Todas">
            <option>Todas</option>
          </select>
        </div>

        <div className="campo">
          <label>Perfil</label>

          <select defaultValue="Todos">
            <option>Todos</option>
            <option>Administrador ECOMETRIA</option>
            <option>Administrador da Organização</option>
            <option>Gestor</option>
            <option>Operacional</option>
            <option>Consulta</option>
          </select>
        </div>

        <div className="campo">
          <label>Status</label>

          <select defaultValue="Todos">
            <option>Todos</option>
            <option>Convite pendente</option>
            <option>Ativo</option>
            <option>Bloqueado</option>
            <option>Inativo</option>
          </select>
        </div>

        <button className="botao-principal">
          Pesquisar
        </button>

      </div>

      <div className="tabela-container">

        <table>

          <thead>
            <tr>
              <th>Usuário</th>
              <th>E-mail</th>
              <th>Organização</th>
              <th>Função</th>
              <th>Perfil</th>
              <th>Status</th>
              <th>Último acesso</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td
                colSpan="8"
                className="sem-registros"
              >
                Nenhum usuário encontrado.
              </td>
            </tr>
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Usuarios;