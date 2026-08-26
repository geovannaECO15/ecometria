function Inicio() {
  const anoAtual = new Date().getFullYear();

  return (
    <div>

      {/* =========================
          APRESENTAÇÃO
      ========================= */}

      <section className="inicio-apresentacao">

        <div className="inicio-apresentacao-conteudo">

          <span className="inicio-etiqueta">
            ECOMETRIA
          </span>

          <h1>
            Rastreabilidade para uma economia mais circular
          </h1>

          <p>
            A ECOMETRIA conecta informações sobre geração,
            coleta, movimentação e destinação de resíduos,
            contribuindo para o acompanhamento da recuperação
            de materiais e da economia circular.
          </p>

        </div>

        <div className="inicio-ano">

          <span>Ano de referência</span>

          <strong>{anoAtual}</strong>

        </div>

      </section>


      {/* =========================
          RESULTADOS GERAIS
      ========================= */}

      <section className="secao-inicio">

        <div className="cabecalho-secao-inicio">

          <div>
            <span className="inicio-etiqueta">
              IMPACTO
            </span>

            <h2>
              Resultados da ECOMETRIA
            </h2>

            <p>
              Indicadores consolidados de todas as operações
              acompanhadas pela plataforma.
            </p>
          </div>

        </div>


        <div className="destaque-impacto-inicio">

          <div>

            <span>
              Reciclagem em {anoAtual}
            </span>

            <h3>
              A ECOMETRIA encaminhou --% dos resíduos
              registrados para reciclagem.
            </h3>

            <p>
              Esse indicador será calculado automaticamente
              a partir das destinações registradas na plataforma.
            </p>

          </div>

          <strong>
            --%
          </strong>

        </div>


        <div className="grade-impacto-inicio">

          <div className="card-impacto-inicio">
            <span>Massa registrada</span>

            <strong>-- kg</strong>

            <p>
              Total de materiais registrados na plataforma.
            </p>
          </div>


          <div className="card-impacto-inicio">
            <span>Reciclagem</span>

            <strong>--%</strong>

            <p>
              Materiais encaminhados para reciclagem.
            </p>
          </div>


          <div className="card-impacto-inicio">
            <span>Recuperação</span>

            <strong>--%</strong>

            <p>
              Materiais recuperados por diferentes formas de destinação.
            </p>
          </div>


          <div className="card-impacto-inicio">
            <span>Rastreabilidade</span>

            <strong>--%</strong>

            <p>
              Registros com cadeia de rastreabilidade completa.
            </p>
          </div>


          <div className="card-impacto-inicio">
            <span>Organizações</span>

            <strong>--</strong>

            <p>
              Organizações participantes da ECOMETRIA.
            </p>
          </div>


          <div className="card-impacto-inicio">
            <span>Eventos registrados</span>

            <strong>--</strong>

            <p>
              Eventos ambientais acompanhados pela plataforma.
            </p>
          </div>

        </div>

      </section>


      {/* =========================
          MÍDIAS
      ========================= */}

      <section className="secao-inicio">

        <div className="cabecalho-secao-inicio">

          <div>
            <span className="inicio-etiqueta">
              ECOMETRIA EM AÇÃO
            </span>

            <h2>
              Mídias e ações
            </h2>

            <p>
              Espaço para apresentar projetos, atividades de campo,
              eventos, capacitações e ações desenvolvidas pela
              ECOMETRIA e seus parceiros.
            </p>
          </div>

        </div>


        <div className="grade-midias-inicio">

          <div className="card-midia-inicio">

            <div className="foto-placeholder-inicio">
              Foto / mídia
            </div>

            <div className="conteudo-midia-inicio">

              <span>Ação ECOMETRIA</span>

              <h3>
                Título da ação ou projeto
              </h3>

              <p>
                Uma breve descrição da atividade poderá
                aparecer neste espaço.
              </p>

            </div>

          </div>


          <div className="card-midia-inicio">

            <div className="foto-placeholder-inicio">
              Foto / mídia
            </div>

            <div className="conteudo-midia-inicio">

              <span>Projeto</span>

              <h3>
                Título da atividade
              </h3>

              <p>
                Espaço reservado para fotografias e informações
                das ações desenvolvidas.
              </p>

            </div>

          </div>


          <div className="card-midia-inicio">

            <div className="foto-placeholder-inicio">
              Foto / mídia
            </div>

            <div className="conteudo-midia-inicio">

              <span>Evento</span>

              <h3>
                Título do evento
              </h3>

              <p>
                A plataforma poderá divulgar resultados,
                ações e iniciativas neste espaço.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          PARCEIROS
      ========================= */}

      <section className="secao-inicio">

        <div className="cabecalho-secao-inicio">

          <div>
            <span className="inicio-etiqueta">
              REDE ECOMETRIA
            </span>

            <h2>
              Parceiros
            </h2>

            <p>
              Instituições e organizações que colaboram com
              projetos, operações e ações da ECOMETRIA.
            </p>
          </div>

        </div>


        <div className="grade-parceiros-inicio">

          <div className="parceiro-placeholder">
            Logo do parceiro
          </div>

          <div className="parceiro-placeholder">
            Logo do parceiro
          </div>

          <div className="parceiro-placeholder">
            Logo do parceiro
          </div>

          <div className="parceiro-placeholder">
            Logo do parceiro
          </div>

        </div>

      </section>


      {/* =========================
          CONTATO
      ========================= */}

      <section className="contato-inicio">

        <div>

          <span className="inicio-etiqueta inicio-etiqueta-clara">
            CONTATO
          </span>

          <h2>
            Entre em contato com a ECOMETRIA
          </h2>

          <p>
            Para informações sobre projetos, implantação,
            parcerias ou utilização da plataforma.
          </p>

        </div>


        <div className="dados-contato-inicio">

          <div>
            <span>E-mail</span>
            <strong>--</strong>
          </div>

          <div>
            <span>Telefone</span>
            <strong>--</strong>
          </div>

          <div>
            <span>Instituição / Endereço</span>
            <strong>--</strong>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Inicio;