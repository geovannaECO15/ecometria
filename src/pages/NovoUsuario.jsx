function NovoUsuario({ setPagina }) {
  return (
    <div>

      <div className="cabecalho-pagina">

        <div>
          <h2>Novo Usuário</h2>

          <p>
            Cadastro de pessoa autorizada a acessar a plataforma.
          </p>
        </div>

        <button
          className="botao-secundario"
          onClick={() => setPagina("Usuários")}
        >
          Voltar
        </button>

      </div>

      <form className="form-evento">

        {/* 1 - DADOS PESSOAIS */}

        <section className="secao-formulario">

          <div className="titulo-secao">

            <span className="numero-secao">1</span>

            <div>
              <h3>Dados pessoais</h3>

              <p>
                Informações básicas da pessoa que utilizará a plataforma.
              </p>
            </div>

          </div>

          <div className="grid-formulario">

            <div className="campo-formulario campo-grande">
              <label>Nome completo *</label>

              <input
                type="text"
                placeholder="Nome completo"
              />
            </div>

            <div className="campo-formulario">
              <label>CPF</label>

              <input
                type="text"
                placeholder="CPF"
              />
            </div>

            <div className="campo-formulario">
              <label>E-mail *</label>

              <input
                type="email"
                placeholder="usuario@organizacao.com"
              />
            </div>

            <div className="campo-formulario">
              <label>Telefone</label>

              <input
                type="text"
                placeholder="Telefone"
              />
            </div>

          </div>

        </section>

        {/* 2 - ORGANIZAÇÃO */}

        <section className="secao-formulario">

          <div className="titulo-secao">

            <span className="numero-secao">2</span>

            <div>
              <h3>Vínculo com a organização</h3>

              <p>
                Identifique a entidade à qual esta pessoa pertence.
              </p>
            </div>

          </div>

          <div className="grid-formulario">

            <div className="campo-formulario campo-grande">
              <label>Organização *</label>

              <select defaultValue="">
                <option value="" disabled>
                  Selecione a organização
                </option>
              </select>
            </div>

            <div className="campo-formulario">
              <label>Tipo da organização</label>

              <input
                type="text"
                placeholder="Preenchido automaticamente"
                readOnly
              />
            </div>

            <div className="campo-formulario">
              <label>Cargo informado</label>

              <input
                type="text"
                placeholder="Cargo na organização"
              />
            </div>

          </div>

        </section>

        {/* 3 - FUNÇÃO */}

        <section className="secao-formulario">

          <div className="titulo-secao">

            <span className="numero-secao">3</span>

            <div>
              <h3>Função na ECOMETRIA</h3>

              <p>
                Defina qual atividade a pessoa exercerá na operação.
              </p>
            </div>

          </div>

          <div className="grid-formulario">

            <div className="campo-formulario">
              <label>Função principal *</label>

              <select defaultValue="">
                <option value="" disabled>
                  Selecione
                </option>

                <option>Administrador da Organização</option>
                <option>Gestor</option>
                <option>Fiscal</option>
                <option>Analista</option>
                <option>Operador do Ponto</option>
                <option>Motorista</option>
                <option>Operador Logístico</option>
                <option>Responsável pelo Recebimento</option>
                <option>Operador de Pesagem</option>
                <option>Consulta</option>
                <option>Outro</option>
              </select>
            </div>

            <div className="campo-formulario campo-grande">
              <label>Descrição da função</label>

              <input
                type="text"
                placeholder="Descreva brevemente a responsabilidade deste usuário"
              />
            </div>

          </div>

        </section>

        {/* 4 - PERFIL */}

        <section className="secao-formulario">

          <div className="titulo-secao">

            <span className="numero-secao">4</span>

            <div>
              <h3>Perfil de acesso</h3>

              <p>
                Defina o nível de acesso que será concedido ao usuário.
              </p>
            </div>

          </div>

          <div className="grid-formulario">

            <div className="campo-formulario">
              <label>Perfil *</label>

              <select defaultValue="">
                <option value="" disabled>
                  Selecione
                </option>

                <option>Administrador da Organização</option>
                <option>Gestor</option>
                <option>Operacional</option>
                <option>Consulta</option>
              </select>
            </div>

            <div className="campo-formulario">
              <label>Escopo de acesso *</label>

              <select defaultValue="">
                <option value="" disabled>
                  Selecione
                </option>

                <option>Somente minha organização</option>
                <option>Operações autorizadas</option>
                <option>Somente registros atribuídos</option>
                <option>Somente consulta</option>
              </select>
            </div>

            <div className="campo-formulario">
              <label>Operação</label>

              <select defaultValue="">
                <option value="" disabled>
                  Selecione, quando aplicável
                </option>
              </select>
            </div>

          </div>

        </section>

        {/* 5 - PERMISSÕES */}

        <section className="secao-formulario">

          <div className="titulo-secao">

            <span className="numero-secao">5</span>

            <div>
              <h3>Permissões</h3>

              <p>
                Defina quais ações poderão ser realizadas por esta pessoa.
              </p>
            </div>

          </div>

          <div className="grade-permissoes">

            <label className="permissao-item">
              <input type="checkbox" />
              <span>Visualizar Dashboard</span>
            </label>

            <label className="permissao-item">
              <input type="checkbox" />
              <span>Consultar Pontos de Coleta</span>
            </label>

            <label className="permissao-item">
              <input type="checkbox" />
              <span>Criar Eventos / Coletas</span>
            </label>

            <label className="permissao-item">
              <input type="checkbox" />
              <span>Editar Eventos / Coletas</span>
            </label>

            <label className="permissao-item">
              <input type="checkbox" />
              <span>Registrar Pesagem</span>
            </label>

            <label className="permissao-item">
              <input type="checkbox" />
              <span>Registrar Movimentação</span>
            </label>

            <label className="permissao-item">
              <input type="checkbox" />
              <span>Realizar Check-in</span>
            </label>

            <label className="permissao-item">
              <input type="checkbox" />
              <span>Confirmar Recebimento</span>
            </label>

            <label className="permissao-item">
              <input type="checkbox" />
              <span>Registrar Destinação</span>
            </label>

            <label className="permissao-item">
              <input type="checkbox" />
              <span>Anexar Documentos</span>
            </label>

            <label className="permissao-item">
              <input type="checkbox" />
              <span>Tratar Inconsistências</span>
            </label>

            <label className="permissao-item">
              <input type="checkbox" />
              <span>Visualizar Relatórios</span>
            </label>

            <label className="permissao-item">
              <input type="checkbox" />
              <span>Gerenciar Usuários</span>
            </label>

            <label className="permissao-item">
              <input type="checkbox" />
              <span>Gerenciar Dados da Organização</span>
            </label>

          </div>

        </section>

        {/* 6 - CONTA */}

        <section className="secao-formulario">

          <div className="titulo-secao">

            <span className="numero-secao">6</span>

            <div>
              <h3>Acesso à plataforma</h3>

              <p>
                Configure o estado inicial da conta.
              </p>
            </div>

          </div>

          <div className="aviso-administrador-organizacao">

            <strong>Ativação por convite</strong>

            <p>
              Nesta proposta de interface, o usuário não recebe uma senha
              definida pelo administrador. Futuramente, a ECOMETRIA enviará
              um convite para o e-mail informado e o próprio usuário criará
              sua credencial de acesso.
            </p>

          </div>

          <div className="grid-formulario">

            <div className="campo-formulario">
              <label>Status inicial *</label>

              <select defaultValue="Convite pendente">
                <option>Convite pendente</option>
                <option>Ativo</option>
                <option>Inativo</option>
              </select>
            </div>

            <div className="campo-formulario">
              <label>Validade do acesso</label>

              <input type="date" />
            </div>

            <div className="campo-formulario">
              <label>Exigir redefinição de acesso</label>

              <select defaultValue="Sim">
                <option>Sim</option>
                <option>Não</option>
              </select>
            </div>

          </div>

        </section>

        {/* AÇÕES */}

        <div className="acoes-formulario">

          <button
            type="button"
            className="botao-secundario"
            onClick={() => setPagina("Usuários")}
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
            Criar usuário
          </button>

        </div>

      </form>

    </div>
  );
}

export default NovoUsuario; 