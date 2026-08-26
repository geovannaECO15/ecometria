function DashboardOrganizacao() {
  const anoAtual = new Date().getFullYear();

  return (
    <div>

      <div className="cabecalho-pagina">
        <div>
          <h2>Dashboard da Organização</h2>

          <p>
            Indicadores ambientais e operacionais vinculados
            à sua organização.
          </p>
        </div>
      </div>

      <section className="destaque-reciclagem">

        <div>
          <span className="destaque-rotulo">
            RECICLAGEM EM {anoAtual}
          </span>

          <h2>
            Sua organização encaminhou --% dos resíduos
            registrados para reciclagem.
          </h2>

          <p>
            O percentual será calculado automaticamente a partir
            das destinações registradas pela organização.
          </p>
        </div>

        <div className="percentual-destaque">
          --%
        </div>

      </section>

      <div className="grade-indicadores-dashboard">

        <div className="card-indicador-dashboard">
          <span>Massa registrada</span>
          <strong>-- kg</strong>
          <p>Total registrado em {anoAtual}</p>
        </div>

        <div className="card-indicador-dashboard">
          <span>Reciclagem</span>
          <strong>--%</strong>
          <p>Parcela encaminhada para reciclagem</p>
        </div>

        <div className="card-indicador-dashboard">
          <span>Reutilização</span>
          <strong>--%</strong>
          <p>Materiais destinados à reutilização</p>
        </div>

        <div className="card-indicador-dashboard">
          <span>Recuperação total</span>
          <strong>--%</strong>
          <p>
            Reciclagem, reutilização e outras formas de recuperação
          </p>
        </div>

        <div className="card-indicador-dashboard">
          <span>Rejeitos</span>
          <strong>--%</strong>
          <p>Parcela sem recuperação registrada</p>
        </div>

        <div className="card-indicador-dashboard">
          <span>Rastreabilidade</span>
          <strong>--%</strong>
          <p>Registros com cadeia completa</p>
        </div>

        <div className="card-indicador-dashboard">
          <span>Eventos</span>
          <strong>--</strong>
          <p>Eventos registrados em {anoAtual}</p>
        </div>

        <div className="card-indicador-dashboard">
          <span>Inconsistências</span>
          <strong>--</strong>
          <p>Registros que necessitam análise</p>
        </div>

      </div>

      <section className="painel-insights">

        <div className="titulo-painel-dashboard">
          <div>
            <h3>Resultados e insights</h3>

            <p>
              Comparações geradas a partir dos dados
              da própria organização.
            </p>
          </div>
        </div>

        <div className="grade-insights">

          <div className="card-insight">
            <span>Resultado ambiental</span>

            <strong>
              --% dos resíduos foram recuperados em {anoAtual}
            </strong>

            <p>
              Soma das destinações consideradas como
              recuperação de materiais.
            </p>
          </div>

          <div className="card-insight">
            <span>Comparação anual</span>

            <strong>
              -- pontos percentuais
            </strong>

            <p>
              Variação da taxa de reciclagem em relação
              ao ano anterior.
            </p>
          </div>

          <div className="card-insight">
            <span>Material mais recuperado</span>

            <strong>--</strong>

            <p>
              Material com maior massa encaminhada
              à recuperação.
            </p>
          </div>

        </div>

      </section>

      <div className="grade-graficos-dashboard">

        <section className="card-grafico-dashboard">

          <div>
            <h3>Destinação dos resíduos</h3>

            <p>
              Distribuição percentual por tipo de destinação.
            </p>
          </div>

          <div className="grafico-placeholder-dashboard">
            Gráfico de destinação
          </div>

        </section>

        <section className="card-grafico-dashboard">

          <div>
            <h3>Evolução da reciclagem</h3>

            <p>
              Evolução mensal da taxa de reciclagem em {anoAtual}.
            </p>
          </div>

          <div className="grafico-placeholder-dashboard">
            Gráfico de evolução
          </div>

        </section>

        <section className="card-grafico-dashboard">

          <div>
            <h3>Massa por material</h3>

            <p>
              Quantidade registrada para cada classe de material.
            </p>
          </div>

          <div className="grafico-placeholder-dashboard">
            Gráfico por material
          </div>

        </section>

        <section className="card-grafico-dashboard">

          <div>
            <h3>Origem e destino</h3>

            <p>
              Relação entre geração, movimentação e destinação.
            </p>
          </div>

          <div className="grafico-placeholder-dashboard">
            Visualização de fluxo
          </div>

        </section>

      </div>

    </div>
  );
}

export default DashboardOrganizacao;