function NovoDocumento({ setPagina }) {
  return (
    <div>
      <div className="cabecalho-pagina">
        <div>
          <h2>Novo Documento</h2>

          <p>
            Inclusão de documento ou evidência vinculada a um registro.
          </p>
        </div>

        <button
          className="botao-secundario"
          onClick={() => setPagina("Documentos")}
        >
          Voltar
        </button>
      </div>

      <form className="form-evento">

        {/* 1 - VÍNCULO */}
        <section className="secao-formulario">
          <div className="titulo-secao">
            <span className="numero-secao">1</span>

            <div>
              <h3>Vínculo do documento</h3>

              <p>
                Informe a qual registro da plataforma o documento pertence.
              </p>
            </div>
          </div>

          <div className="grid-formulario">

            <div className="campo-formulario">
              <label>Vincular a *</label>

              <select defaultValue="">
                <option value="" disabled>
                  Selecione
                </option>

                <option>Evento / Coleta</option>
                <option>Movimentação</option>
                <option>Destinação</option>
                <option>Ponto de Coleta</option>
              </select>
            </div>

            <div className="campo-formulario campo-grande">
              <label>Registro de referência *</label>

              <select defaultValue="">
                <option value="" disabled>
                  Selecione o registro
                </option>
              </select>
            </div>

          </div>
        </section>

        {/* 2 - IDENTIFICAÇÃO */}
        <section className="secao-formulario">
          <div className="titulo-secao">
            <span className="numero-secao">2</span>

            <div>
              <h3>Identificação</h3>

              <p>
                Classifique e identifique o documento.
              </p>
            </div>
          </div>

          <div className="grid-formulario">

            <div className="campo-formulario">
              <label>Tipo do documento *</label>

              <select defaultValue="">
                <option value="" disabled>
                  Selecione
                </option>

                <option>Foto</option>
                <option>Ticket de pesagem</option>
                <option>Comprovante de recebimento</option>
                <option>MTR</option>
                <option>CDF</option>
                <option>DMR</option>
                <option>Nota / Recibo</option>
                <option>Relatório</option>
                <option>Outro</option>
              </select>
            </div>

            <div className="campo-formulario campo-grande">
              <label>Nome do documento *</label>

              <input
                type="text"
                placeholder="Informe um nome para o documento"
              />
            </div>

            <div className="campo-formulario">
              <label>Número / Código</label>

              <input
                type="text"
                placeholder="Número ou identificador"
              />
            </div>

          </div>
        </section>

        {/* 3 - DATAS */}
        <section className="secao-formulario">
          <div className="titulo-secao">
            <span className="numero-secao">3</span>

            <div>
              <h3>Datas e referência</h3>

              <p>
                Informe as datas relacionadas ao documento.
              </p>
            </div>
          </div>

          <div className="grid-formulario">

            <div className="campo-formulario">
              <label>Data do documento</label>

              <input type="date" />
            </div>

            <div className="campo-formulario">
              <label>Data de inclusão</label>

              <input type="date" />
            </div>

            <div className="campo-formulario">
              <label>Validade</label>

              <input type="date" />
            </div>

          </div>
        </section>

        {/* 4 - RESPONSÁVEL */}
        <section className="secao-formulario">
          <div className="titulo-secao">
            <span className="numero-secao">4</span>

            <div>
              <h3>Responsável e origem</h3>

              <p>
                Registre quem forneceu ou adicionou o documento.
              </p>
            </div>
          </div>

          <div className="grid-formulario">

            <div className="campo-formulario campo-grande">
              <label>Organização / Emissor</label>

              <input
                type="text"
                placeholder="Nome da organização ou emissor"
              />
            </div>

            <div className="campo-formulario">
              <label>Responsável</label>

              <input
                type="text"
                placeholder="Nome do responsável"
              />
            </div>

          </div>
        </section>

        {/* 5 - ARQUIVO */}
        <section className="secao-formulario">
          <div className="titulo-secao">
            <span className="numero-secao">5</span>

            <div>
              <h3>Arquivo</h3>

              <p>
                Área reservada para anexar a evidência digital.
              </p>
            </div>
          </div>

          <div className="area-documentos">
            <div className="upload-placeholder">

              <strong>Selecionar arquivo</strong>

              <span>
                PDF, imagem ou outro arquivo relacionado ao registro.
              </span>

              <button
                type="button"
                className="botao-secundario"
              >
                Selecionar arquivo
              </button>

            </div>
          </div>
        </section>

        {/* 6 - CONTROLE */}
        <section className="secao-formulario">
          <div className="titulo-secao">
            <span className="numero-secao">6</span>

            <div>
              <h3>Controle do documento</h3>

              <p>
                Situação e informações complementares.
              </p>
            </div>
          </div>

          <div className="grid-formulario">

            <div className="campo-formulario">
              <label>Status *</label>

              <select defaultValue="Anexado">
                <option>Anexado</option>
                <option>Pendente de validação</option>
                <option>Validado</option>
                <option>Substituído</option>
                <option>Inconsistente</option>
              </select>
            </div>

            <div className="campo-formulario campo-grande">
              <label>Observações</label>

              <input
                type="text"
                placeholder="Informações complementares"
              />
            </div>

          </div>
        </section>

        {/* AÇÕES */}
        <div className="acoes-formulario">

          <button
            type="button"
            className="botao-secundario"
            onClick={() => setPagina("Documentos")}
          >
            Cancelar
          </button>

          <button
            type="button"
            className="botao-rascunho"
          >
            Salvar rascunho
          </button>

          <button
            type="button"
            className="botao-principal"
          >
            Registrar documento
          </button>

        </div>

      </form>
    </div>
  );
}

export default NovoDocumento;