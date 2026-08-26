function SolicitacoesCadastro({ setPagina }) {
  return (
    <div>

      <div className="cabecalho-pagina">
        <div>
          <h2>Solicitações de Cadastro</h2>

          <p>
            Análise das organizações que solicitaram acesso à plataforma
            ECOMETRIA.
          </p>
        </div>
      </div>

      <div className="resumo-solicitacoes">

        <div className="mini-card">
          <span>Aguardando análise</span>
          <strong>--</strong>
        </div>

        <div className="mini-card">
          <span>Correção solicitada</span>
          <strong>--</strong>
        </div>

        <div className="mini-card">
          <span>Aprovadas</span>
          <strong>--</strong>
        </div>

        <div className="mini-card">
          <span>Rejeitadas</span>
          <strong>--</strong>
        </div>

      </div>

      <div className="filtros-solicitacoes">

        <div className="campo campo-pesquisa-solicitacao">
          <label>Pesquisar</label>

          <input
            type="text"
            placeholder="Organização, CNPJ ou responsável"
          />
        </div>

        <div className="campo">
          <label>Tipo de organização</label>

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
            <option>Aguardando análise</option>
            <option>Em análise</option>
            <option>Correção solicitada</option>
            <option>Aprovada</option>
            <option>Rejeitada</option>
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
              <th>Solicitação</th>
              <th>Organização</th>
              <th>CNPJ</th>
              <th>Tipo</th>
              <th>Responsável</th>
              <th>Data</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td
                colSpan="8"
                className="sem-registros"
              >
                Nenhuma solicitação encontrada.
              </td>
            </tr>
          </tbody>

        </table>
      </div>

      <div className="rodape-explicativo">
        <p>
          Durante o protótipo, use o botão ao lado para visualizar
          como será a análise de uma solicitação.
        </p>

        <button
          className="botao-secundario"
          onClick={() => setPagina("Análise de Cadastro")}
        >
          Visualizar estrutura de análise
        </button>
      </div>

    </div>
  );
}

export default SolicitacoesCadastro;