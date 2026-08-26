function Equipamentos({ setPagina }) {
  return (
    <div>
      <div className="cabecalho-pagina">
        <div>
          <h2>Equipamentos</h2>

          <p>
            Cadastro e acompanhamento dos equipamentos utilizados
            nos pontos de coleta e na operação da ECOMETRIA.
          </p>
        </div>

        <button
          className="botao-principal"
          onClick={() => setPagina("Novo Equipamento")}
        >
          + Novo Equipamento
        </button>
      </div>

      <div className="filtros-eventos">

        <div className="campo campo-pesquisa">
          <label>Pesquisar</label>

          <input
            type="text"
            placeholder="Código, equipamento, ponto ou identificação"
          />
        </div>

        <div className="campo">
          <label>Tipo</label>

          <select defaultValue="Todos">
            <option>Todos</option>
            <option>Identificador QR Code</option>
            <option>Tag RFID / NFC</option>
            <option>Leitor RFID / NFC</option>
            <option>Balança</option>
            <option>Dispositivo IoT</option>
            <option>Gateway</option>
            <option>Sensor</option>
            <option>Outro</option>
          </select>
        </div>

        <div className="campo">
          <label>Status</label>

          <select defaultValue="Todos">
            <option>Todos</option>
            <option>Ativo</option>
            <option>Em teste</option>
            <option>Manutenção</option>
            <option>Inativo</option>
          </select>
        </div>

        <div className="campo">
          <label>Ponto</label>

          <select defaultValue="Todos">
            <option>Todos</option>
          </select>
        </div>

        <button className="botao-principal botao-pesquisar">
          Pesquisar
        </button>

      </div>

      <div className="tabela-container">
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Equipamento</th>
              <th>Tipo</th>
              <th>Tecnologia</th>
              <th>Ponto vinculado</th>
              <th>Status</th>
              <th>Última verificação</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td
                colSpan="8"
                className="sem-registros"
              >
                Nenhum equipamento encontrado.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Equipamentos;