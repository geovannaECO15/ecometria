function NovaMovimentacao({ setPagina }) {
  return (
    <div>
      <div className="cabecalho-pagina">
        <div>
          <h2>Nova Movimentação</h2>

          <p>
            Registro do transporte e deslocamento de materiais.
          </p>
        </div>

        <button
          className="botao-secundario"
          onClick={() => setPagina("Movimentações")}
        >
          Voltar
        </button>
      </div>

      <form className="form-evento">

        {/* 1 - EVENTO */}
        <section className="secao-formulario">
          <div className="titulo-secao">
            <span className="numero-secao">1</span>

            <div>
              <h3>Evento de origem</h3>
              <p>
                Identifique o evento ou coleta associado à movimentação.
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
              <label>Data da movimentação *</label>

              <input type="date" />
            </div>

            <div className="campo-formulario">
              <label>Hora</label>

              <input type="time" />
            </div>

          </div>
        </section>

        {/* 2 - ORIGEM E DESTINO */}
        <section className="secao-formulario">
          <div className="titulo-secao">
            <span className="numero-secao">2</span>

            <div>
              <h3>Origem e destino</h3>
              <p>
                Informe de onde o material saiu e para onde será encaminhado.
              </p>
            </div>
          </div>

          <div className="grid-formulario">

            <div className="campo-formulario">
              <label>Origem *</label>

              <select defaultValue="">
                <option value="" disabled>
                  Selecione a origem
                </option>
              </select>
            </div>

            <div className="campo-formulario">
              <label>Destino *</label>

              <select defaultValue="">
                <option value="" disabled>
                  Selecione o destino
                </option>
              </select>
            </div>

            <div className="campo-formulario">
              <label>Rota</label>

              <input
                type="text"
                placeholder="Identificação da rota"
              />
            </div>

          </div>
        </section>

        {/* 3 - TRANSPORTE */}
        <section className="secao-formulario">
          <div className="titulo-secao">
            <span className="numero-secao">3</span>

            <div>
              <h3>Transporte</h3>
              <p>
                Informações sobre o responsável pelo transporte.
              </p>
            </div>
          </div>

          <div className="grid-formulario">

            <div className="campo-formulario campo-grande">
              <label>Transportador</label>

              <input
                type="text"
                placeholder="Nome do transportador ou organização"
              />
            </div>

            <div className="campo-formulario">
              <label>Veículo</label>

              <input
                type="text"
                placeholder="Placa ou identificação"
              />
            </div>

            <div className="campo-formulario">
              <label>Motorista / Responsável</label>

              <input
                type="text"
                placeholder="Nome do responsável"
              />
            </div>

          </div>
        </section>

        {/* 4 - MATERIAL */}
        <section className="secao-formulario">
          <div className="titulo-secao">
            <span className="numero-secao">4</span>

            <div>
              <h3>Material movimentado</h3>
              <p>
                Informações sobre o material associado ao transporte.
              </p>
            </div>
          </div>

          <div className="grid-formulario">

            <div className="campo-formulario">
              <label>Material</label>

              <select defaultValue="">
                <option value="" disabled>
                  Selecione o material
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
              <label>Massa</label>

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

        {/* 5 - STATUS */}
        <section className="secao-formulario">
          <div className="titulo-secao">
            <span className="numero-secao">5</span>

            <div>
              <h3>Situação da movimentação</h3>
              <p>
                Defina o estágio atual do transporte.
              </p>
            </div>
          </div>

          <div className="grid-formulario">

            <div className="campo-formulario">
              <label>Status *</label>

              <select defaultValue="Planejada">
                <option>Planejada</option>
                <option>Em trânsito</option>
                <option>Concluída</option>
                <option>Cancelada</option>
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
                Espaço reservado para comprovantes relacionados à movimentação.
              </p>
            </div>
          </div>

          <div className="area-documentos">
            <div className="upload-placeholder">

              <strong>Adicionar documento</strong>

              <span>
                Comprovante de transporte, MTR, foto,
                recibo, ticket ou outro documento.
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

        {/* BOTÕES */}
        <div className="acoes-formulario">

          <button
            type="button"
            className="botao-secundario"
            onClick={() => setPagina("Movimentações")}
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
            Registrar movimentação
          </button>

        </div>

      </form>
    </div>
  );
}

export default NovaMovimentacao;