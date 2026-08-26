function Relatorios() {
  return (
    <div>
      <div className="cabecalho-pagina">
        <div>
          <h2>Relatórios</h2>

          <p>
            Consulta, consolidação e exportação das informações
            registradas na ECOMETRIA.
          </p>
        </div>
      </div>

      {/* FILTROS GERAIS */}

      <section className="painel-relatorios">
        <div className="titulo-bloco-relatorio">
          <h3>Filtros gerais</h3>

          <p>
            Defina o período e os parâmetros que serão utilizados
            na geração dos relatórios.
          </p>
        </div>

        <div className="filtros-relatorios">

          <div className="campo">
            <label>Data inicial</label>
            <input type="date" />
          </div>

          <div className="campo">
            <label>Data final</label>
            <input type="date" />
          </div>

          <div className="campo">
            <label>Ponto de Coleta</label>

            <select defaultValue="Todos">
              <option>Todos</option>
            </select>
          </div>

          <div className="campo">
            <label>Material</label>

            <select defaultValue="Todos">
              <option>Todos</option>
              <option>Papel / Papelão</option>
              <option>Plástico</option>
              <option>Metal</option>
              <option>Vidro</option>
              <option>Orgânico</option>
              <option>Rejeito</option>
              <option>Outro</option>
            </select>
          </div>

        </div>
      </section>

      {/* TIPOS DE RELATÓRIO */}

      <div className="titulo-area-relatorios">
        <h3>Tipos de relatório</h3>

        <p>
          Selecione o conjunto de informações que deseja analisar.
        </p>
      </div>

      <div className="grade-relatorios">

        {/* RASTREABILIDADE */}

        <div className="card-relatorio">
          <div className="icone-relatorio">
            01
          </div>

          <div className="conteudo-card-relatorio">
            <h3>Rastreabilidade</h3>

            <p>
              Visão ponta a ponta dos eventos, desde a origem
              até a destinação registrada.
            </p>

            <div className="itens-relatorio">
              <span>IRPP</span>
              <span>Eventos rastreados</span>
              <span>Origem e destino</span>
              <span>Status dos eventos</span>
            </div>
          </div>

          <div className="acoes-card-relatorio">
            <button className="botao-principal">
              Preparar relatório
            </button>
          </div>
        </div>

        {/* MASSAS */}

        <div className="card-relatorio">
          <div className="icone-relatorio">
            02
          </div>

          <div className="conteudo-card-relatorio">
            <h3>Massas e Materiais</h3>

            <p>
              Consolidação das massas registradas por tipo de
              material, período e ponto de coleta.
            </p>

            <div className="itens-relatorio">
              <span>Massa total</span>
              <span>Massa por material</span>
              <span>Massa por período</span>
              <span>Massa por ponto</span>
            </div>
          </div>

          <div className="acoes-card-relatorio">
            <button className="botao-principal">
              Preparar relatório
            </button>
          </div>
        </div>

        {/* PONTOS */}

        <div className="card-relatorio">
          <div className="icone-relatorio">
            03
          </div>

          <div className="conteudo-card-relatorio">
            <h3>Pontos de Coleta</h3>

            <p>
              Desempenho e movimentação dos pontos cadastrados
              na plataforma.
            </p>

            <div className="itens-relatorio">
              <span>Pontos ativos</span>
              <span>Eventos por ponto</span>
              <span>Massa por ponto</span>
              <span>Última atividade</span>
            </div>
          </div>

          <div className="acoes-card-relatorio">
            <button className="botao-principal">
              Preparar relatório
            </button>
          </div>
        </div>

        {/* MOVIMENTAÇÕES */}

        <div className="card-relatorio">
          <div className="icone-relatorio">
            04
          </div>

          <div className="conteudo-card-relatorio">
            <h3>Movimentações e Destinações</h3>

            <p>
              Consolidação das rotas, transportadores,
              movimentações e destinos registrados.
            </p>

            <div className="itens-relatorio">
              <span>Rotas</span>
              <span>Transportadores</span>
              <span>Destinadores</span>
              <span>Tipo de destinação</span>
            </div>
          </div>

          <div className="acoes-card-relatorio">
            <button className="botao-principal">
              Preparar relatório
            </button>
          </div>
        </div>

        {/* QUALIDADE */}

        <div className="card-relatorio">
          <div className="icone-relatorio">
            05
          </div>

          <div className="conteudo-card-relatorio">
            <h3>Qualidade dos Dados</h3>

            <p>
              Avaliação de completude, inconsistências
              e qualidade dos registros.
            </p>

            <div className="itens-relatorio">
              <span>Completude</span>
              <span>Inconsistências</span>
              <span>Campos ausentes</span>
              <span>Falhas de sincronização</span>
            </div>
          </div>

          <div className="acoes-card-relatorio">
            <button className="botao-principal">
              Preparar relatório
            </button>
          </div>
        </div>

        {/* PILOTO */}

        <div className="card-relatorio">
          <div className="icone-relatorio">
            06
          </div>

          <div className="conteudo-card-relatorio">
            <h3>Indicadores do Piloto</h3>

            <p>
              Consolidação dos indicadores utilizados na
              validação operacional da ECOMETRIA.
            </p>

            <div className="itens-relatorio">
              <span>IRPP</span>
              <span>Completude</span>
              <span>Sincronização</span>
              <span>Adoção</span>
              <span>Disponibilidade</span>
              <span>Usabilidade</span>
            </div>
          </div>

          <div className="acoes-card-relatorio">
            <button className="botao-principal">
              Preparar relatório
            </button>
          </div>
        </div>

      </div>

      {/* FORMATOS */}

      <section className="painel-relatorios painel-exportacao">

        <div className="titulo-bloco-relatorio">
          <h3>Formato de saída</h3>

          <p>
            A exportação será habilitada posteriormente,
            após a integração com os dados da plataforma.
          </p>
        </div>

        <div className="opcoes-exportacao">

          <button
            type="button"
            className="botao-formato"
          >
            PDF
          </button>

          <button
            type="button"
            className="botao-formato"
          >
            Excel
          </button>

          <button
            type="button"
            className="botao-formato"
          >
            CSV
          </button>

        </div>

      </section>

      {/* HISTÓRICO */}

      <div className="titulo-area-relatorios">
        <h3>Histórico de relatórios</h3>

        <p>
          Relatórios gerados anteriormente serão apresentados aqui.
        </p>
      </div>

      <div className="tabela-container">
        <table>
          <thead>
            <tr>
              <th>Relatório</th>
              <th>Período</th>
              <th>Gerado em</th>
              <th>Responsável</th>
              <th>Formato</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td
                colSpan="6"
                className="sem-registros"
              >
                Nenhum relatório gerado.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Relatorios;