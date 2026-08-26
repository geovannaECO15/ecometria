function Documentos({ setPagina }) {
  return (
    <div>
      <div className="cabecalho-pagina">
        <div>
          <h2>Documentos</h2>

          <p>
            Consulta e organização das evidências associadas aos registros
            da ECOMETRIA.
          </p>
        </div>

        <button
          className="botao-principal"
          onClick={() => setPagina("Novo Documento")}
        >
          + Novo Documento
        </button>
      </div>

      <div className="filtros-eventos">

        <div className="campo campo-pesquisa">
          <label>Pesquisar</label>

          <input
            type="text"
            placeholder="Nome, número, evento ou documento"
          />
        </div>

        <div className="campo">
          <label>Tipo</label>

          <select defaultValue="Todos">
            <option>Todos</option>
            <option>Foto</option>
            <option>Ticket de pesagem</option>
            <option>Comprovante</option>
            <option>MTR</option>
            <option>CDF</option>
            <option>DMR</option>
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
              <th>Documento</th>
              <th>Tipo</th>
              <th>Vinculado a</th>
              <th>Referência</th>
              <th>Data</th>
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
                Nenhum documento encontrado.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Documentos;