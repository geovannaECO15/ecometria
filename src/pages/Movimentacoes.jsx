function Movimentacoes({ setPagina }) {
  return (
    <div>
      <div className="cabecalho-pagina">
        <div>
          <h2>Movimentações</h2>

          <p>
            Acompanhamento do transporte e deslocamento dos materiais
            entre os pontos de origem e destino.
          </p>
        </div>

        <button
          className="botao-principal"
          onClick={() => setPagina("Nova Movimentação")}
        >
          + Nova Movimentação
        </button>
      </div>

      <div className="filtros-movimentacoes">

        <div className="campo campo-pesquisa-movimentacao">
          <label>Pesquisar</label>

          <input
            type="text"
            placeholder="Evento, rota, transportador ou destino"
          />
        </div>

        <div className="campo">
          <label>Status</label>

          <select defaultValue="Todos">
            <option>Todos</option>
            <option>Planejada</option>
            <option>Em trânsito</option>
            <option>Concluída</option>
            <option>Cancelada</option>
          </select>
        </div>

        <div className="campo">
          <label>Data inicial</label>
          <input type="date" />
        </div>

        <div className="campo">
          <label>Data final</label>
          <input type="date" />
        </div>

        <button className="botao-principal botao-pesquisar">
          Pesquisar
        </button>

      </div>

      <div className="tabela-container">
        <table>
          <thead>
            <tr>
              <th>Movimentação</th>
              <th>Evento</th>
              <th>Data</th>
              <th>Origem</th>
              <th>Transportador</th>
              <th>Rota</th>
              <th>Destino</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td
                colSpan="9"
                className="sem-registros"
              >
                Nenhuma movimentação encontrada.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Movimentacoes;