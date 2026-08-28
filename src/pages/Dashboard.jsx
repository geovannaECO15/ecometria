import residuos from "../data/residuosFestaJunina.json";
import operacao from "../data/operacaoFestaJunina.json";

import "./Dashboard.css";

function Dashboard() {
  const massaTotal = residuos.reduce(
    (total, residuo) => total + residuo.massaKg,
    0
  );

  function formatarMassa(valor) {
    return valor.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  function calcularPercentual(massa) {
    return ((massa / massaTotal) * 100).toLocaleString("pt-BR", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
  }

  const etapasRastreabilidade = [
    {
      nome: "Origem",
      valor: operacao.organizacaoGeradora,
      concluida: Boolean(operacao.organizacaoGeradora),
    },

    {
      nome: "Evento",
      valor: operacao.evento?.nome,
      concluida: Boolean(operacao.evento?.nome),
    },

    {
      nome: "Material",
      valor: `${residuos.length} tipos`,
      concluida: residuos.length > 0,
    },

    {
      nome: "Transporte",
      valor: operacao.transporte?.responsavel,
      concluida: Boolean(operacao.transporte?.responsavel),
    },

    {
      nome: "Destinação",
      valor:
        operacao.destinacoes?.length > 0
          ? `${operacao.destinacoes.length} destinos`
          : null,
      concluida: operacao.destinacoes?.length > 0,
    },
  ];

  const etapasConcluidas = etapasRastreabilidade.filter(
    (etapa) => etapa.concluida
  ).length;

  const rastreabilidade =
    (etapasConcluidas / etapasRastreabilidade.length) * 100;

  const massasPreenchidas = residuos.every(
    (residuo) =>
      typeof residuo.massaKg === "number" &&
      residuo.massaKg > 0
  );

  const destinosPreenchidos = residuos.every(
    (residuo) =>
      residuo.destino &&
      residuo.destino.trim() !== ""
  );

  const completudeDados = 100;
  const dadosValidados = 80;

  return (
    <div className="dashboard-page">

      <div className="dashboard-layout-geral">

        {/* CONTEÚDO PRINCIPAL */}

        <div className="dashboard-conteudo-principal">

          {/* OPERAÇÃO MAIS RECENTE */}

          <section className="contexto-operacao">

            <div className="contexto-operacao-topo">

              <div>

                <span className="rotulo-contexto">
                  OPERAÇÃO MAIS RECENTE
                </span>

                <h3>
                  {operacao.nome}
                </h3>

              </div>

              <span className="status-operacao">
                Concluída
              </span>

            </div>


            {/* DADOS COMPLEMENTARES */}

            <div className="grade-contexto-operacao">

              <div>

                <span>
                  Organização
                </span>

                <strong>
                  {operacao.organizacaoGeradora}
                </strong>

              </div>


              <div>

                <span>
                  Evento
                </span>

                <strong>
                  {operacao.evento?.nome}
                </strong>

              </div>


              <div>

                <span>
                  Local
                </span>

                <strong>
                  {operacao.evento?.local}
                </strong>

              </div>


              <div>

                <span>
                  Ano
                </span>

                <strong>
                  {operacao.evento?.ano}
                </strong>

              </div>

            </div>

          </section>


          {/* FILTROS */}

          <div className="selecao-operacao">

            <div>

              <label>
                Organização
              </label>

              <select defaultValue="Paróquia São Pedro">

                <option>
                  Paróquia São Pedro
                </option>

              </select>

            </div>


            <div>

              <label>
                Evento / Operação
              </label>

              <select defaultValue="Festa Junina Lixo Zero 2026">

                <option>
                  Festa Junina Lixo Zero 2026
                </option>

              </select>

            </div>

          </div>


          {/* INDICADORES */}

          <div className="grade-indicadores-dashboard">

            <div className="card-indicador-dashboard">

              <span>
                Operação total
              </span>

              <strong>
                {formatarMassa(massaTotal)} kg
              </strong>

            </div>


            <div className="card-indicador-dashboard">

              <span>
                Tipos de resíduos
              </span>

              <strong>
                {residuos.length}
              </strong>

            </div>


            <div className="card-indicador-dashboard">

              <span>
                Rastreabilidade
              </span>

              <strong>
                {rastreabilidade.toFixed(0)}%
              </strong>

              <p>
                {etapasConcluidas}/{etapasRastreabilidade.length} etapas
              </p>

            </div>


            <div className="card-indicador-dashboard">

              <span>
                Destinos registrados
              </span>

              <strong>
                {operacao.destinacoes?.length || 0}
              </strong>

            </div>

          </div>


          {/* RASTREABILIDADE */}

          <section className="secao-rastreabilidade">

            <div className="cabecalho-rastreabilidade">

              <div>

                <span className="etiqueta-rastreabilidade">
                  RASTREABILIDADE PONTA A PONTA
                </span>

                <h3>
                  {operacao.evento?.nome}
                </h3>

                <p>
                  Origem → Material → Destino
                </p>

              </div>


              <div className="percentual-rastreabilidade">

                <strong>
                  {rastreabilidade.toFixed(0)}%
                </strong>

                <span>
                  rastreado
                </span>

              </div>

            </div>


            <div className="barra-rastreabilidade">

              <div
                className="barra-rastreabilidade-preenchida"
                style={{
                  width: `${rastreabilidade}%`,
                }}
              />

            </div>


            <div className="fluxo-rastreabilidade">

              {etapasRastreabilidade.map((etapa, index) => (
                <div
                  className="grupo-etapa-rastreabilidade"
                  key={etapa.nome}
                >

                  <div
                    className={
                      etapa.concluida
                        ? "etapa-rastreabilidade concluida"
                        : "etapa-rastreabilidade pendente"
                    }
                  >

                    <div className="icone-etapa-rastreabilidade">
                      {etapa.concluida ? "✓" : "!"}
                    </div>

                    <span>
                      {etapa.nome}
                    </span>

                    <strong>
                      {etapa.valor || "Não informado"}
                    </strong>

                  </div>

                  {index < etapasRastreabilidade.length - 1 && (
                    <div className="seta-rastreabilidade">
                      →
                    </div>
                  )}

                </div>
              ))}

            </div>

          </section>


          {/* COMPOSIÇÃO */}

          <section className="secao-composicao">

            <div className="titulo-composicao">

              <h3>
                Composição da operação
              </h3>

            </div>


            <div className="grade-residuos">

              {residuos.map((residuo) => (
                <div
                  className="card-residuo"
                  key={residuo.tipoResiduo}
                >

                  <span className="nome-residuo">
                    {residuo.tipoResiduo}
                  </span>

                  <strong>
                    {formatarMassa(residuo.massaKg)} kg
                  </strong>

                  <div className="linha-percentual-residuo">

                    <div
                      className="preenchimento-percentual-residuo"
                      style={{
                        width: `${
                          (residuo.massaKg / massaTotal) * 100
                        }%`,
                      }}
                    />

                  </div>

                  <p>
                    {calcularPercentual(residuo.massaKg)}%
                  </p>

                </div>
              ))}

            </div>

          </section>

        </div>


        {/* SAÚDE DOS DADOS */}

        <aside className="saude-dados">

          <div className="saude-dados-cabecalho">

            <span className="saude-etiqueta">
              QUALIDADE
            </span>

            <h3>
              Saúde dos dados
            </h3>

          </div>


          <div className="saude-destaque">

            <span>
              Completude
            </span>

            <strong>
              {completudeDados}%
            </strong>

            <div className="saude-barra">

              <div
                style={{
                  width: `${completudeDados}%`,
                }}
              />

            </div>

          </div>


          <div className="lista-saude">

            <div className="item-saude">

              <div>
                <span>Origem</span>
                <small>Identificada</small>
              </div>

              <strong className="status-ok">
                ✓
              </strong>

            </div>


            <div className="item-saude">

              <div>

                <span>Massa</span>

                <small>
                  {massasPreenchidas
                    ? "Registrada"
                    : "Incompleta"}
                </small>

              </div>

              <strong
                className={
                  massasPreenchidas
                    ? "status-ok"
                    : "status-alerta"
                }
              >
                {massasPreenchidas ? "✓" : "!"}
              </strong>

            </div>


            <div className="item-saude">

              <div>

                <span>Destinação</span>

                <small>
                  {destinosPreenchidos
                    ? "Identificada"
                    : "Incompleta"}
                </small>

              </div>

              <strong
                className={
                  destinosPreenchidos
                    ? "status-ok"
                    : "status-alerta"
                }
              >
                {destinosPreenchidos ? "✓" : "!"}
              </strong>

            </div>


            <div className="item-saude">

              <div>
                <span>Transporte</span>
                <small>Demonstrativo</small>
              </div>

              <strong className="status-alerta">
                !
              </strong>

            </div>

          </div>


          <div className="saude-validacao">

            <span>
              Dados validados
            </span>

            <strong>
              {dadosValidados}%
            </strong>

            <p>
              4 de 5 etapas apoiadas por dados da operação.
            </p>

          </div>


          <div className="saude-alerta">

            <span>
              1 alerta
            </span>

            <p>
              Transporte utilizado como dado demonstrativo.
            </p>

          </div>

        </aside>

      </div>

    </div>
  );
}

export default Dashboard;