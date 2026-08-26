function AnaliseCadastro({ setPagina }) {
  return (
    <div>

      <div className="cabecalho-pagina">
        <div>
          <h2>Análise de Cadastro</h2>

          <p>
            Verificação institucional antes da aprovação da organização
            na ECOMETRIA.
          </p>
        </div>

        <button
          className="botao-secundario"
          onClick={() => setPagina("Solicitações de Cadastro")}
        >
          Voltar
        </button>
      </div>

      <div className="painel-status-cadastro">

        <div>
          <span>Status da solicitação</span>
          <strong>Aguardando análise</strong>
        </div>

        <div>
          <span>Solicitação</span>
          <strong>--</strong>
        </div>

        <div>
          <span>Data de envio</span>
          <strong>--</strong>
        </div>

      </div>

      <div className="form-evento">

        {/* 1 */}
        <section className="secao-formulario">

          <div className="titulo-secao">
            <span className="numero-secao">1</span>

            <div>
              <h3>Dados da organização</h3>

              <p>
                Informações institucionais fornecidas no cadastro.
              </p>
            </div>
          </div>

          <div className="grid-formulario">

            <div className="campo-formulario campo-grande">
              <label>Razão social</label>

              <input
                type="text"
                placeholder="Razão social da organização"
                readOnly
              />
            </div>

            <div className="campo-formulario">
              <label>Nome fantasia</label>

              <input
                type="text"
                placeholder="Nome fantasia"
                readOnly
              />
            </div>

            <div className="campo-formulario">
              <label>CNPJ</label>

              <input
                type="text"
                placeholder="CNPJ"
                readOnly
              />
            </div>

            <div className="campo-formulario">
              <label>Tipo de organização</label>

              <input
                type="text"
                placeholder="Contratante, transportador..."
                readOnly
              />
            </div>

            <div className="campo-formulario">
              <label>Município / UF</label>

              <input
                type="text"
                placeholder="Localização"
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
              <h3>Responsável institucional</h3>

              <p>
                Pessoa responsável pela solicitação de cadastro.
              </p>
            </div>
          </div>

          <div className="grid-formulario">

            <div className="campo-formulario">
              <label>Nome</label>

              <input
                type="text"
                placeholder="Responsável"
                readOnly
              />
            </div>

            <div className="campo-formulario">
              <label>Cargo / Função</label>

              <input
                type="text"
                placeholder="Cargo"
                readOnly
              />
            </div>

            <div className="campo-formulario">
              <label>E-mail</label>

              <input
                type="text"
                placeholder="E-mail"
                readOnly
              />
            </div>

            <div className="campo-formulario">
              <label>Telefone</label>

              <input
                type="text"
                placeholder="Telefone"
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
              <h3>Perfil operacional</h3>

              <p>
                Informações sobre a atuação da organização.
              </p>
            </div>
          </div>

          <div className="grid-formulario">

            <div className="campo-formulario">
              <label>Atuação principal</label>

              <input
                type="text"
                placeholder="Atividade principal"
                readOnly
              />
            </div>

            <div className="campo-formulario campo-grande">
              <label>Materiais atendidos</label>

              <input
                type="text"
                placeholder="Materiais informados"
                readOnly
              />
            </div>

            <div className="campo-formulario">
              <label>Área de atendimento</label>

              <input
                type="text"
                placeholder="Município, região ou estado"
                readOnly
              />
            </div>

          </div>

        </section>

        {/* 4 */}
        <section className="secao-formulario">

          <div className="titulo-secao">
            <span className="numero-secao">4</span>

            <div>
              <h3>Documentação</h3>

              <p>
                Documentos enviados para análise institucional.
              </p>
            </div>
          </div>

          <div className="tabela-documentos-analise">

            <div className="linha-documento-analise">
              <span>Comprovante de CNPJ</span>
              <strong>Não informado</strong>
              <button className="botao-secundario">
                Visualizar
              </button>
            </div>

            <div className="linha-documento-analise">
              <span>Documento do responsável</span>
              <strong>Não informado</strong>
              <button className="botao-secundario">
                Visualizar
              </button>
            </div>

            <div className="linha-documento-analise">
              <span>Licenças / Autorizações</span>
              <strong>Não informado</strong>
              <button className="botao-secundario">
                Visualizar
              </button>
            </div>

            <div className="linha-documento-analise">
              <span>Outros documentos</span>
              <strong>Não informado</strong>
              <button className="botao-secundario">
                Visualizar
              </button>
            </div>

          </div>

        </section>

        {/* 5 */}
        <section className="secao-formulario">

          <div className="titulo-secao">
            <span className="numero-secao">5</span>

            <div>
              <h3>Administrador da organização</h3>

              <p>
                Usuário que passará a administrar os acessos internos
                após a aprovação.
              </p>
            </div>
          </div>

          <div className="aviso-administrador-organizacao">

            <strong>Administrador institucional</strong>

            <p>
              Após a aprovação, o responsável indicado poderá receber
              o perfil de Administrador da Organização e criar ou
              gerenciar os usuários internos da entidade.
            </p>

          </div>

          <div className="grid-formulario">

            <div className="campo-formulario">
              <label>Administrador inicial</label>

              <select defaultValue="">
                <option value="" disabled>
                  Selecione
                </option>

                <option>Responsável institucional informado no cadastro</option>
                <option>Outro responsável</option>
              </select>
            </div>

            <div className="campo-formulario campo-grande">
              <label>Observação</label>

              <input
                type="text"
                placeholder="Informações sobre a definição do administrador"
              />
            </div>

          </div>

        </section>

        {/* 6 */}
        <section className="secao-formulario">

          <div className="titulo-secao">
            <span className="numero-secao">6</span>

            <div>
              <h3>Análise administrativa</h3>

              <p>
                Registro da avaliação realizada pela equipe ECOMETRIA.
              </p>
            </div>
          </div>

          <div className="grid-formulario">

            <div className="campo-formulario">
              <label>Resultado da análise</label>

              <select defaultValue="Em análise">
                <option>Em análise</option>
                <option>Aprovar</option>
                <option>Solicitar correção</option>
                <option>Rejeitar</option>
              </select>
            </div>

            <div className="campo-formulario">
              <label>Responsável pela análise</label>

              <input
                type="text"
                placeholder="Administrador ECOMETRIA"
                readOnly
              />
            </div>

            <div className="campo-formulario">
              <label>Data da análise</label>

              <input type="date" />
            </div>

            <div className="campo-formulario campo-grande">
              <label>Parecer / Observações</label>

              <textarea
                className="textarea-formulario"
                placeholder="Registre o parecer ou as correções necessárias"
              />
            </div>

          </div>

        </section>

        <div className="acoes-analise-cadastro">

          <button
            type="button"
            className="botao-rejeitar"
          >
            Rejeitar
          </button>

          <div className="acoes-direita-cadastro">

            <button
              type="button"
              className="botao-correcao"
            >
              Solicitar correção
            </button>

            <button
              type="button"
              className="botao-aprovar"
            >
              Aprovar organização
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AnaliseCadastro;