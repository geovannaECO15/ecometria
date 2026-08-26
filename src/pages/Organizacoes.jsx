function Organizacoes({ setPagina }) {
  return (
    <div>

      <div className="cabecalho-pagina">
        <div>
          <h2>Organizações</h2>

          <p>
            Consulta e gerenciamento das organizações cadastradas
            na ECOMETRIA.
          </p>
        </div>
      </div>

      <div className="resumo-solicitacoes">

        <div className="mini-card">
          <span>Organizações ativas</span>
          <strong>--</strong>
        </div>

        <div className="mini-card">
          <span>Contratantes</span>
          <strong>--</strong>
        </div>

        <div className="mini-card">
          <span>Parceiros operacionais</span>
          <strong>--</strong>
        </div>

        <div className="mini-card">
          <span>Com pendências</span>
          <strong>--</strong>
        </div>

      </div>

      <div className="filtros-solicitacoes">

        <div className="campo campo-pesquisa-solicitacao">
          <label>Pesquisar</label>

          <input
            type="text"
            placeholder="Organização, CNPJ ou município"
          />
        </div>

        <div className="campo">
          <label>Tipo</label>

          <select defaultValue="Todos">
            <option>Todos</option>
            <option>Contratante</option>
            <option>Gerador</option>
            <option>Transportador</option>
            <option>Cooperativa / Associação</option>
            <option>Destinador</option>
            <option>Operador logístico</option>
            <option>Outro</option>
          </select>
        </div>

        <div className="campo">
          <label>Status</label>

          <select defaultValue="Todos">
            <option>Todos</option>
            <option>Ativa</option>
            <option>Com pendência</option>
            <option>Suspensa</option>
            <option>Inativa</option>
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
              <th>Organização</th>
              <th>CNPJ</th>
              <th>Tipo</th>
              <th>Município / UF</th>
              <th>Administrador</th>
              <th>Status</th>
              <th>Documentação</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td
                colSpan="8"
                className="sem-registros"
              >
                Nenhuma organização encontrada.
              </td>
            </tr>
          </tbody>

        </table>
      </div>

      <div className="rodape-explicativo">

        <p>
          As organizações aprovadas serão apresentadas nesta área.
        </p>

        <button
          className="botao-secundario"
          onClick={() => setPagina("Detalhes da Organização")}
        >
          Visualizar estrutura de uma organização
        </button>

      </div>

    </div>
  );
}

export default Organizacoes;