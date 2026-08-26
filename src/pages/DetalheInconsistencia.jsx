function DetalheInconsistencia({ setPagina }) {
  return (
    <div>
      <div className="cabecalho-pagina">
        <div>
          <h2>Detalhes da Inconsistência</h2>

          <p>
            Análise e tratamento de uma ocorrência identificada pela
            plataforma.
          </p>
        </div>

        <button
          className="botao-secundario"
          onClick={() => setPagina("Inconsistências")}
        >
          Voltar
        </button>
      </div>

      <div className="painel-status-inconsistencia">

        <div>
          <span className="rotulo-status">
            Status
          </span>

          <strong>Aberta</strong>
        </div>

        <div>
          <span className="rotulo-status">
            Criticidade
          </span>

          <strong>--</strong>
        </div>

        <div>
          <span className="rotulo-status">
            Código
          </span>

          <strong>--</strong>
        </div>

      </div>

      <div className="form-evento">

        {/* 1 */}
        <section className="secao-formulario">
          <div className="titulo-secao">
            <span className="numero-secao">1</span>

            <div>
              <h3>Identificação</h3>

              <p>
                Informações gerais da inconsistência.
              </p>
            </div>
          </div>

          <div className="grid-formulario">

            <div className="campo-formulario">
              <label>Tipo</label>

              <input
                type="text"
                value=""
                placeholder="Tipo da inconsistência"
                readOnly
              />
            </div>

            <div className="campo-formulario">
              <label>Data de identificação</label>

              <input
                type="text"
                value=""
                placeholder="--"
                readOnly
              />
            </div>

            <div className="campo-formulario">
              <label>Origem da detecção</label>

              <input
                type="text"
                value=""
                placeholder="Validação automática ou análise"
                readOnly
              />
            </div>

          </div>
        </section>

        {/* 2 */}
        <section className="secao-formulario">
          <div className="titulo-secao">
            <span className="numero-secao">2</span>

            <div>
              <h3>Registro relacionado</h3>

              <p>
                Registro da plataforma associado à ocorrência.
              </p>
            </div>
          </div>

          <div className="grid-formulario">

            <div className="campo-formulario">
              <label>Categoria</label>

              <input
                type="text"
                placeholder="Evento, movimentação, destinação..."
                readOnly
              />
            </div>

            <div className="campo-formulario campo-grande">
              <label>Referência</label>

              <input
                type="text"
                placeholder="Código do registro"
                readOnly
              />
            </div>

          </div>
        </section>

        {/* 3 */}
        <section className="secao-formulario">
          <div className="titulo-secao">
            <span className="numero-secao">3</span>

            <div>
              <h3>Descrição do problema</h3>

              <p>
                Detalhes da condição identificada.
              </p>
            </div>
          </div>

          <div className="bloco-descricao-vazio">
            Nenhuma informação carregada.
          </div>
        </section>

        {/* 4 */}
        <section className="secao-formulario">
          <div className="titulo-secao">
            <span className="numero-secao">4</span>

            <div>
              <h3>Evidências</h3>

              <p>
                Informações que apoiam a identificação da inconsistência.
              </p>
            </div>
          </div>

          <div className="area-documentos">
            <div className="upload-placeholder">

              <strong>Nenhuma evidência disponível</strong>

              <span>
                Logs, documentos ou informações relacionadas
                poderão aparecer aqui.
              </span>

            </div>
          </div>
        </section>

        {/* 5 */}
        <section className="secao-formulario">
          <div className="titulo-secao">
            <span className="numero-secao">5</span>

            <div>
              <h3>Tratamento</h3>

              <p>
                Registre a análise e a ação adotada.
              </p>
            </div>
          </div>

          <div className="grid-formulario">

            <div className="campo-formulario">
              <label>Novo status</label>

              <select defaultValue="Em análise">
                <option>Aberta</option>
                <option>Em análise</option>
                <option>Corrigida</option>
                <option>Descartada</option>
              </select>
            </div>

            <div className="campo-formulario">
              <label>Responsável pela análise</label>

              <select defaultValue="">
                <option value="" disabled>
                  Selecione o responsável
                </option>
              </select>
            </div>

            <div className="campo-formulario">
              <label>Data do tratamento</label>

              <input type="date" />
            </div>

            <div className="campo-formulario campo-grande">
              <label>Ação realizada</label>

              <input
                type="text"
                placeholder="Descreva a correção ou decisão tomada"
              />
            </div>

          </div>
        </section>

        {/* AÇÕES */}
        <div className="acoes-formulario">

          <button
            type="button"
            className="botao-secundario"
            onClick={() => setPagina("Inconsistências")}
          >
            Cancelar
          </button>

          <button
            type="button"
            className="botao-rascunho"
          >
            Manter em análise
          </button>

          <button
            type="button"
            className="botao-principal"
          >
            Concluir tratamento
          </button>

        </div>

      </div>
    </div>
  );
}

export default DetalheInconsistencia;