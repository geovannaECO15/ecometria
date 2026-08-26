function Dashboard() {
  const anoAtual = new Date().getFullYear();

  return (
    <div>

      <div className="cabecalho-pagina">
        <div>
          <h2>Dashboard ECOMETRIA</h2>

          <p>
            Indicadores consolidados das operações acompanhadas
            pela plataforma.
          </p>
        </div>
      </div>

      {/* INDICADORES */}

      <div className="grade-indicadores-dashboard">

        <div className="card-indicador-dashboard">
          <span>Massa registrada</span>
          <strong>-- kg</strong>
          <p>Total registrado em {anoAtual}</p>
        </div>

        <div className="card-indicador-dashboard">
          <span>Eventos</span>
          <strong>--</strong>
          <p>Eventos acompanhados pela plataforma</p>
        </div>

        <div className="card-indicador-dashboard">
          <span>Pontos ativos</span>
          <strong>--</strong>
          <p>Pontos de coleta participantes</p>
        </div>

        <div className="card-indicador-dashboard">
          <span>Organizações</span>
          <strong>--</strong>
          <p>Organizações participantes da rede</p>
        </div>

        <div className="card-indicador-dashboard">
          <span>Reciclagem</span>
          <strong>--%</strong>
          <p>Materiais encaminhados para reciclagem</p>
        </div>

        <div className="card-indicador-dashboard">
          <span>Recuperação</span>
          <strong>--%</strong>
          <p>Materiais encaminhados para formas de recuperação</p>
        </div>

        <div className="card-indicador-dashboard">
          <span>Rastreabilidade</span>
          <strong>--%</strong>
          <p>Registros com cadeia completa</p>
        </div>

        <div className="card-indicador-dashboard">
          <span>Destinações confirmadas</span>
          <strong>--</strong>
          <p>Destinações concluídas e registradas</p>
        </div>

      </div>

      {/* GRÁFICOS */}

      <div className="grade-graficos-dashboard">

        <section className="card-grafico-dashboard">
          <div>
            <h3>Massa por material</h3>

            <p>
              Distribuição dos materiais registrados na ECOMETRIA.
            </p>
          </div>

          <div className="grafico-placeholder-dashboard">
            Gráfico de massa por material
          </div>
        </section>

        <section className="card-grafico-dashboard">
          <div>
            <h3>Eventos por período</h3>

            <p>
              Evolução dos registros ao longo de {anoAtual}.
            </p>
          </div>

          <div className="grafico-placeholder-dashboard">
            Gráfico de eventos por período
          </div>
        </section>

        <section className="card-grafico-dashboard">
          <div>
            <h3>Destinações por tipo</h3>

            <p>
              Distribuição entre reciclagem, reutilização e
              demais formas de destinação.
            </p>
          </div>

          <div className="grafico-placeholder-dashboard">
            Gráfico de destinações
          </div>
        </section>

        <section className="card-grafico-dashboard">
          <div>
            <h3>Evolução da reciclagem</h3>

            <p>
              Acompanhamento da taxa de reciclagem da rede
              ECOMETRIA.
            </p>
          </div>

          <div className="grafico-placeholder-dashboard">
            Gráfico de evolução
          </div>
        </section>

      </div>

    </div>
  );
}

export default Dashboard;