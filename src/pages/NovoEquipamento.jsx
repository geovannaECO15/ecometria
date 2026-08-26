function NovoEquipamento({ setPagina }) {
  return (
    <div>
      <div className="cabecalho-pagina">
        <div>
          <h2>Novo Equipamento</h2>

          <p>
            Cadastro de equipamento, identificador ou componente
            utilizado na operação da ECOMETRIA.
          </p>
        </div>

        <button
          className="botao-secundario"
          onClick={() => setPagina("Equipamentos")}
        >
          Voltar
        </button>
      </div>

      <form className="form-evento">

        {/* 1 - IDENTIFICAÇÃO */}
        <section className="secao-formulario">
          <div className="titulo-secao">
            <span className="numero-secao">1</span>

            <div>
              <h3>Identificação</h3>

              <p>
                Informações básicas para identificar o equipamento.
              </p>
            </div>
          </div>

          <div className="grid-formulario">

            <div className="campo-formulario">
              <label>Código interno *</label>

              <input
                type="text"
                placeholder="Código do equipamento"
              />
            </div>

            <div className="campo-formulario campo-grande">
              <label>Nome do equipamento *</label>

              <input
                type="text"
                placeholder="Informe um nome para o equipamento"
              />
            </div>

            <div className="campo-formulario">
              <label>Tipo *</label>

              <select defaultValue="">
                <option value="" disabled>
                  Selecione
                </option>

                <option>Identificador QR Code</option>
                <option>Tag RFID / NFC</option>
                <option>Leitor RFID / NFC</option>
                <option>Balança</option>
                <option>Dispositivo IoT</option>
                <option>Gateway</option>
                <option>Sensor</option>
                <option>Outro</option>
              </select>
            </div>

          </div>
        </section>

        {/* 2 - TECNOLOGIA */}
        <section className="secao-formulario">
          <div className="titulo-secao">
            <span className="numero-secao">2</span>

            <div>
              <h3>Tecnologia</h3>

              <p>
                Características técnicas principais do equipamento.
              </p>
            </div>
          </div>

          <div className="grid-formulario">

            <div className="campo-formulario">
              <label>Tecnologia principal</label>

              <select defaultValue="">
                <option value="" disabled>
                  Selecione
                </option>

                <option>QR Code</option>
                <option>RFID</option>
                <option>NFC</option>
                <option>ESP32</option>
                <option>Célula de carga</option>
                <option>HX711</option>
                <option>Wi-Fi</option>
                <option>Bluetooth</option>
                <option>Outro</option>
              </select>
            </div>

            <div className="campo-formulario">
              <label>Fabricante</label>

              <input
                type="text"
                placeholder="Fabricante"
              />
            </div>

            <div className="campo-formulario">
              <label>Modelo</label>

              <input
                type="text"
                placeholder="Modelo"
              />
            </div>

            <div className="campo-formulario">
              <label>Número de série</label>

              <input
                type="text"
                placeholder="Número de série"
              />
            </div>

            <div className="campo-formulario">
              <label>Versão / Firmware</label>

              <input
                type="text"
                placeholder="Versão, quando aplicável"
              />
            </div>

          </div>
        </section>

        {/* 3 - VÍNCULO */}
        <section className="secao-formulario">
          <div className="titulo-secao">
            <span className="numero-secao">3</span>

            <div>
              <h3>Vínculo operacional</h3>

              <p>
                Relacione o equipamento ao ponto ou estrutura onde será utilizado.
              </p>
            </div>
          </div>

          <div className="grid-formulario">

            <div className="campo-formulario campo-grande">
              <label>Ponto de Coleta</label>

              <select defaultValue="">
                <option value="" disabled>
                  Selecione o ponto
                </option>
              </select>
            </div>

            <div className="campo-formulario">
              <label>Função no ponto</label>

              <select defaultValue="">
                <option value="" disabled>
                  Selecione
                </option>

                <option>Identificação</option>
                <option>Pesagem</option>
                <option>Comunicação</option>
                <option>Processamento</option>
                <option>Monitoramento</option>
                <option>Outro</option>
              </select>
            </div>

            <div className="campo-formulario">
              <label>Data de instalação</label>

              <input type="date" />
            </div>

          </div>
        </section>

        {/* 4 - COMUNICAÇÃO */}
        <section className="secao-formulario">
          <div className="titulo-secao">
            <span className="numero-secao">4</span>

            <div>
              <h3>Comunicação e integração</h3>

              <p>
                Informações sobre conectividade e integração com a plataforma.
              </p>
            </div>
          </div>

          <div className="grid-formulario">

            <div className="campo-formulario">
              <label>Tipo de conexão</label>

              <select defaultValue="">
                <option value="" disabled>
                  Selecione
                </option>

                <option>Wi-Fi</option>
                <option>Ethernet</option>
                <option>Bluetooth</option>
                <option>Rede móvel</option>
                <option>USB</option>
                <option>Sem conexão</option>
                <option>Outro</option>
              </select>
            </div>

            <div className="campo-formulario">
              <label>Identificador técnico</label>

              <input
                type="text"
                placeholder="MAC, ID, UID ou equivalente"
              />
            </div>

            <div className="campo-formulario">
              <label>Integração com a ECOMETRIA</label>

              <select defaultValue="">
                <option value="" disabled>
                  Selecione
                </option>

                <option>Automática</option>
                <option>Manual</option>
                <option>Em desenvolvimento</option>
                <option>Não integrada</option>
              </select>
            </div>

          </div>
        </section>

        {/* 5 - CONTROLE */}
        <section className="secao-formulario">
          <div className="titulo-secao">
            <span className="numero-secao">5</span>

            <div>
              <h3>Controle e manutenção</h3>

              <p>
                Situação operacional e acompanhamento do equipamento.
              </p>
            </div>
          </div>

          <div className="grid-formulario">

            <div className="campo-formulario">
              <label>Status *</label>

              <select defaultValue="Em teste">
                <option>Em teste</option>
                <option>Ativo</option>
                <option>Manutenção</option>
                <option>Inativo</option>
              </select>
            </div>

            <div className="campo-formulario">
              <label>Última verificação</label>

              <input type="date" />
            </div>

            <div className="campo-formulario">
              <label>Próxima verificação</label>

              <input type="date" />
            </div>

            <div className="campo-formulario campo-grande">
              <label>Observações técnicas</label>

              <input
                type="text"
                placeholder="Informações de instalação, teste ou manutenção"
              />
            </div>

          </div>
        </section>

        {/* 6 - DOCUMENTAÇÃO */}
        <section className="secao-formulario">
          <div className="titulo-secao">
            <span className="numero-secao">6</span>

            <div>
              <h3>Documentação técnica</h3>

              <p>
                Espaço para manuais, fotos, relatórios de teste ou outros arquivos.
              </p>
            </div>
          </div>

          <div className="area-documentos">
            <div className="upload-placeholder">

              <strong>Adicionar documentação</strong>

              <span>
                Manual, fotografia, ficha técnica, relatório de ensaio
                ou outro documento relacionado ao equipamento.
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
            onClick={() => setPagina("Equipamentos")}
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
            Registrar equipamento
          </button>

        </div>

      </form>
    </div>
  );
}

export default NovoEquipamento;