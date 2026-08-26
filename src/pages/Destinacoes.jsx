function Destinacoes({ setPagina }) {
  return (
    <div>
      <div className="cabecalho-pagina">
        <div>
          <h2>Destinações</h2>

          <p>
            Acompanhamento dos materiais encaminhados aos seus destinos.
          </p>
        </div>

        <button
          className="botao-principal"
          onClick={() => setPagina("Nova Destinação")}
        >
          + Nova Destinação
        </button>
      </div>

      <div className="filtros-eventos">

        <div className="campo campo-pesquisa">
          <label>Pesquisar</label>

          <input
            type="text"
            placeholder="Evento, destinador, material ou destino"
          />
        </div>

        <div className="campo">
          <label>Tipo de destinação</label>

          <select defaultValue="Todos">
            <option>Todos</option>
            <option>Reciclagem</option>
            <option>Reutilização</option>
            <option>Compostagem</option>
            <option>Tratamento</option>
            <option>Aterro</option>
            <option>Outro</option>
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
              <th>Destinação</th>
              <th>Evento</th>
              <th>Data</th>
              <th>Material</th>
              <th>Massa</th>
              <th>Destinador</th>
              <th>Tipo</th>
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
                Nenhuma destinação encontrada.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Destinacoes;