function Eventos({ setPagina }) {
  return (
    <div>
      <div className="cabecalho-pagina">
        <div>
          <h2>Eventos / Coletas</h2>

          <p>
            Registro e acompanhamento dos eventos de coleta e movimentação.
          </p>
        </div>

        <button
          className="botao-principal"
          onClick={() => setPagina("Novo Evento")}
        >
          + Novo Evento
        </button>
      </div>

      <div className="filtros-eventos">

        <div className="campo campo-pesquisa">
          <label>Pesquisar</label>

          <input
            type="text"
            placeholder="Código, ponto de coleta ou material"
          />
        </div>

        <div className="campo campo-status">
          <label>Status</label>

          <select>
            <option>Todos</option>
            <option>Aberto</option>
            <option>Em andamento</option>
            <option>Finalizado</option>
            <option>Inconsistente</option>
          </select>
        </div>

        <div className="campo campo-data">
          <label>Data inicial</label>
          <input type="date" />
        </div>

        <div className="campo campo-data">
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
              <th>Evento</th>
              <th>Data</th>
              <th>Ponto de Coleta</th>
              <th>Material</th>
              <th>Massa</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td
                colSpan="7"
                className="sem-registros"
              >
                Nenhum registro encontrado.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Eventos;