function NovaDestinacao({ setPagina }) {
  return (
    <div>
      <div className="cabecalho-pagina">
        <div>
          <h2>Nova Destinação</h2>

          <p>
            Registro do recebimento e da destinação do material.
          </p>
        </div>

        <button
          className="botao-secundario"
          onClick={() => setPagina("Destinações")}
        >
          Voltar
        </button>
      </div>

      <form className="form-evento">

        {/* 1 - ORIGEM DO REGISTRO */}
        <section className="secao-formulario">
          <div className="titulo-secao">
            <span className="numero-secao">1</span>

            <div>
              <h3>Origem da destinação</h3>

              <p>
                Relacione a destinação ao evento ou movimentação correspondente.
              </p>
            </div>
          </div>

          <div className="grid-formulario">

            <div className="campo-formulario campo-grande">
              <label>Evento / Coleta *</label>

              <select defaultValue="">
                <option value="" disabled>
                  Selecione o evento
                </option>
              </select>
            </div>

            <div className="campo-formulario">
              <label>Movimentação</label>

              <select defaultValue="">
                <option value="" disabled>
                  Selecione a movimentação
                </option>
              </select>
            </div>

          </div>
        </section>

        {/* 2 - MATERIAL */}
        <section className="secao-formulario">
          <div className="titulo-secao">
            <span className="numero-secao">2</span>

            <div>
              <h3>Material recebido</h3>

              <p>
                Informe o material e a massa associados ao recebimento.
              </p>
            </div>
          </div>

          <div className="grid-formulario">

            <div className="campo-formulario">
              <label>Classe do material *</label>

              <select defaultValue="">
                <option value="" disabled>
                  Selecione
                </option>

                <option>Papel / Papelão</option>
                <option>Plástico</option>
                <option>Metal</option>
                <option>Vidro</option>
                <option>Orgânico</option>
                <option>Rejeito</option>
                <option>Outro</option>
              </select>
            </div>

            <div className="campo-formulario">
              <label>Tipo do material</label>

              <input
                type="text"
                placeholder="Informe o tipo do material"
              />
            </div>

            <div className="campo-formulario">
              <label>Massa recebida *</label>

              <input
                type="number"
                placeholder="0,00"
                step="0.01"
              />
            </div>

            <div className="campo-formulario">
              <label>Unidade de medida</label>

              <select defaultValue="kg">
                <option value="kg">kg</option>
                <option value="t">tonelada</option>
              </select>
            </div>

          </div>
        </section>

        {/* 3 - DESTINADOR */}
        <section className="secao-formulario">
          <div className="titulo-secao">
            <span className="numero-secao">3</span>

            <div>
              <h3>Destinador</h3>

              <p>
                Informações sobre a organização que recebeu o material.
              </p>
            </div>
          </div>

          <div className="grid-formulario">

            <div className="campo-formulario campo-grande">
              <label>Nome do destinador *</label>

              <input
                type="text"
                placeholder="Nome da organização"
              />
            </div>

            <div className="campo-formulario">
              <label>Documento</label>

              <input
                type="text"
                placeholder="CNPJ ou identificação"
              />
            </div>

            <div className="campo-formulario campo-grande">
              <label>Local do destino</label>

              <input
                type="text"
                placeholder="Endereço ou unidade de recebimento"
              />
            </div>

          </div>
        </section>

        {/* 4 - TIPO DE DESTINAÇÃO */}
        <section className="secao-formulario">
          <div className="titulo-secao">
            <span className="numero-secao">4</span>

            <div>
              <h3>Tipo de destinação</h3>

              <p>
                Informe o tratamento ou destino aplicado ao material.
              </p>
            </div>
          </div>

          <div className="grid-formulario">

            <div className="campo-formulario">
              <label>Destinação *</label>

              <select defaultValue="">
                <option value="" disabled>
                  Selecione
                </option>

                <option>Reciclagem</option>
                <option>Reutilização</option>
                <option>Compostagem</option>
                <option>Tratamento</option>
                <option>Aterro</option>
                <option>Outro</option>
              </select>
            </div>

            <div className="campo-formulario">
              <label>Data de recebimento *</label>

              <input type="date" />
            </div>

            <div className="campo-formulario">
              <label>Hora do recebimento</label>

              <input type="time" />
            </div>

          </div>
        </section>

        {/* 5 - CONFIRMAÇÃO */}
        <section className="secao-formulario">
          <div className="titulo-secao">
            <span className="numero-secao">5</span>

            <div>
              <h3>Confirmação</h3>

              <p>
                Registre a situação atual desta destinação.
              </p>
            </div>
          </div>

          <div className="grid-formulario">

            <div className="campo-formulario">
              <label>Status *</label>

              <select defaultValue="Recebido">
                <option>Recebido</option>
                <option>Pendente de confirmação</option>
                <option>Finalizado</option>
                <option>Inconsistente</option>
                <option>Cancelado</option>
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

        {/* 6 - DOCUMENTOS */}
        <section className="secao-formulario">
          <div className="titulo-secao">
            <span className="numero-secao">6</span>

            <div>
              <h3>Documentos e evidências</h3>

              <p>
                Adicione comprovantes relacionados à destinação.
              </p>
            </div>
          </div>

          <div className="area-documentos">
            <div className="upload-placeholder">

              <strong>Adicionar documento</strong>

              <span>
                CDF, MTR, comprovante de recebimento,
                ticket de pesagem, foto ou outro arquivo.
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

        {/* AÇÕES */}
        <div className="acoes-formulario">

          <button
            type="button"
            className="botao-secundario"
            onClick={() => setPagina("Destinações")}
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
            Registrar destinação
          </button>

        </div>

      </form>
    </div>
  );
}

export default NovaDestinacao;