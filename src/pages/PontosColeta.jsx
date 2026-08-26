function PontosColeta() {
  return (
    <div>
      <div className="cabecalho-pagina">
        <div>
          <h2>Pontos de Coleta</h2>
          <p>Cadastro e gerenciamento dos pontos monitorados.</p>
        </div>

        <button className="botao-principal">
          + Novo Ponto
        </button>
      </div>

      <div className="filtros">
        <div className="campo">
          <label>Pesquisar</label>
          <input
            type="text"
            placeholder="Nome ou código do ponto"
          />
        </div>

        <div className="campo">
          <label>Status</label>

          <select>
            <option>Todos</option>
            <option>Ativo</option>
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
              <th>Código</th>
              <th>Ponto de Coleta</th>
              <th>Organização</th>
              <th>Tipo</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td
                colSpan="6"
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

export default PontosColeta;