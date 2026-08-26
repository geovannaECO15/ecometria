function NovoEvento({ setPagina }) {
  return (
    <div>
      <div className="cabecalho-pagina">
        <div>
          <h2>Novo Evento</h2>
          <p>
            Registro de um novo evento de coleta e rastreabilidade.
          </p>
        </div>

        <button
          className="botao-secundario"
          onClick={() => setPagina("Eventos / Coletas")}
        >
          Voltar
        </button>
      </div>

      <form className="form-evento">

        {/* IDENTIFICAÇÃO */}
        <section className="secao-formulario">
          <div className="titulo-secao">
            <span className="numero-secao">1</span>

            <div>
              <h3>Identificação</h3>
              <p>Informações básicas do evento.</p>
            </div>
          </div>

          <div className="grid-formulario">
            <div className="campo-formulario campo-grande">
              <label>Ponto de Coleta *</label>

              <select defaultValue="">
                <option value="" disabled>
                  Selecione o ponto de coleta
                </option>
              </select>
            </div>

            <div className="campo-formulario">
              <label>Data *</label>
              <input type="date" />
            </div>

            <div className="campo-formulario">
              <label>Hora *</label>
              <input type="time" />
            </div>

            <div className="campo-formulario">
              <label>Origem *</label>

              <select defaultValue="">
                <option value="" disabled>
                  Selecione
                </option>

                <option>Ponto de coleta</option>
                <option>Unidade geradora</option>
                <option>Recebimento externo</option>
                <option>Outro</option>
              </select>
            </div>

            <div className="campo-formulario">
              <label>Responsável *</label>

              <select defaultValue="">
                <option value="" disabled>
                  Selecione o responsável
                </option>
              </select>
            </div>
          </div>
        </section>

        {/* MATERIAL */}
        <section className="secao-formulario">
          <div className="titulo-secao">
            <span className="numero-secao">2</span>

            <div>
              <h3>Material</h3>
              <p>Classificação do resíduo ou material coletado.</p>
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
              <label>Tipo do material *</label>

              <input
                type="text"
                placeholder="Informe o tipo do material"
              />
            </div>

            <div className="campo-formulario campo-grande">
              <label>Observação do material</label>

              <input
                type="text"
                placeholder="Descrição complementar, se necessário"
              />
            </div>
          </div>
        </section>

        {/* PESAGEM */}
        <section className="secao-formulario">
          <div className="titulo-secao">
            <span className="numero-secao">3</span>

            <div>
              <h3>Pesagem</h3>
              <p>Registro da massa associada ao evento.</p>
            </div>
          </div>

          <div className="grid-formulario">
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

            <div className="campo-formulario">
              <label>Método de pesagem</label>

              <select defaultValue="">
                <option value="" disabled>
                  Selecione
                </option>

                <option>Balança integrada</option>
                <option>Balança manual</option>
                <option>Registro externo</option>
              </select>
            </div>
          </div>
        </section>

        {/* MOVIMENTAÇÃO */}
        <section className="secao-formulario">
          <div className="titulo-secao">
            <span className="numero-secao">4</span>

            <div>
              <h3>Movimentação</h3>
              <p>
                Informações de transporte e deslocamento do material.
              </p>
            </div>
          </div>

          <div className="grid-formulario">
            <div className="campo-formulario campo-grande">
              <label>Transportador</label>

              <input
                type="text"
                placeholder="Nome do transportador"
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
              <label>Rota</label>

              <input
                type="text"
                placeholder="Identificação da rota"
              />
            </div>

            <div className="campo-formulario">
              <label>Data da movimentação</label>

              <input type="date" />
            </div>
          </div>
        </section>

        {/* DESTINAÇÃO */}
        <section className="secao-formulario">
          <div className="titulo-secao">
            <span className="numero-secao">5</span>

            <div>
              <h3>Destinação</h3>
              <p>Registro do destino do material.</p>
            </div>
          </div>

          <div className="grid-formulario">
            <div className="campo-formulario campo-grande">
              <label>Destinador</label>

              <input
                type="text"
                placeholder="Nome da organização de destino"
              />
            </div>

            <div className="campo-formulario">
              <label>Tipo de destinação</label>

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
              <label>Data de recebimento</label>

              <input type="date" />
            </div>
          </div>
        </section>

        {/* DOCUMENTOS */}
        <section className="secao-formulario">
          <div className="titulo-secao">
            <span className="numero-secao">6</span>

            <div>
              <h3>Documentos e Evidências</h3>
              <p>
                Espaço reservado para comprovantes e documentos.
              </p>
            </div>
          </div>

          <div className="area-documentos">
            <div className="upload-placeholder">
              <strong>Adicionar documento</strong>

              <span>
                Fotos, comprovantes, ticket de pesagem,
                MTR, CDF ou outros arquivos.
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
            onClick={() => setPagina("Eventos / Coletas")}
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
            Finalizar evento
          </button>
        </div>

      </form>
    </div>
  );
}

export default NovoEvento;