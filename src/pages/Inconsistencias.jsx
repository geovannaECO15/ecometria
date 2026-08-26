function Inconsistencias({ setPagina }) {
  return (
    <div>
      <div className="cabecalho-pagina">
        <div>
          <h2>Inconsistências</h2>

          <p>
            Identificação e acompanhamento de registros que exigem
            análise ou correção.
          </p>
        </div>
      </div>

      <div className="filtros-inconsistencias">

        <div className="campo campo-pesquisa-inconsistencia">
          <label>Pesquisar</label>

          <input
            type="text"
            placeholder="Evento, ponto, material ou descrição"
          />
        </div>

        <div className="campo">
          <label>Tipo</label>

          <select defaultValue="Todos">
            <option>Todos</option>
            <option>Dados incompletos</option>
            <option>Massa ausente</option>
            <option>Destino ausente</option>
            <option>Documento ausente</option>
            <option>Falha de sincronização</option>
            <option>Duplicidade</option>
            <option>Divergência de dados</option>
            <option>Outro</option>
          </select>
        </div>

        <div className="campo">
          <label>Criticidade</label>

          <select defaultValue="Todas">
            <option>Todas</option>
            <option>Baixa</option>
            <option>Média</option>
            <option>Alta</option>
            <option>Crítica</option>
          </select>
        </div>

        <div className="campo">
          <label>Status</label>

          <select defaultValue="Todos">
            <option>Todos</option>
            <option>Aberta</option>
            <option>Em análise</option>
            <option>Corrigida</option>
            <option>Descartada</option>
          </select>
        </div>

        <button className="botao-principal botao-pesquisar">
          Pesquisar
        </button>

      </div>

      <div className="resumo-inconsistencias">

        <div className="mini-card">
          <span>Abertas</span>
          <strong>--</strong>
        </div>

        <div className="mini-card">
          <span>Em análise</span>
          <strong>--</strong>
        </div>

        <div className="mini-card">
          <span>Críticas</span>
          <strong>--</strong>
        </div>

        <div className="mini-card">
          <span>Corrigidas</span>
          <strong>--</strong>
        </div>

      </div>

      <div className="tabela-container">
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Data</th>
              <th>Tipo</th>
              <th>Referência</th>
              <th>Descrição</th>
              <th>Criticidade</th>
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
                Nenhuma inconsistência encontrada.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="rodape-explicativo">
        <p>
          As inconsistências serão geradas futuramente a partir das
          validações dos registros da plataforma.
        </p>

        <button
          className="botao-secundario"
          onClick={() => setPagina("Detalhe Inconsistência")}
        >
          Visualizar exemplo da tela de análise
        </button>
      </div>

    </div>
  );
}

export default Inconsistencias;