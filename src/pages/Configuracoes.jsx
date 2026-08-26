import { useState } from "react";

function Configuracoes() {
  const [aba, setAba] = useState("Geral");
  const [formAberto, setFormAberto] = useState(null);

  /* =========================
     CADASTROS TEMPORÁRIOS
  ========================= */

  const [materiais, setMateriais] = useState([]);
  const [destinacoes, setDestinacoes] = useState([]);
  const [documentos, setDocumentos] = useState([]);
  const [integracoes, setIntegracoes] = useState([]);

  /* =========================
     FORMULÁRIOS
  ========================= */

  const [novoMaterial, setNovoMaterial] = useState({
    nome: "",
    descricao: "",
    unidade: "kg",
    status: "Ativa",
  });

  const [novaDestinacao, setNovaDestinacao] = useState({
    nome: "",
    descricao: "",
    status: "Ativa",
  });

  const [novoDocumento, setNovoDocumento] = useState({
    nome: "",
    aplicacao: "Todos",
    obrigatoriedade: "Opcional",
    status: "Ativo",
  });

  const [novaIntegracao, setNovaIntegracao] = useState({
    nome: "",
    categoria: "Identificação",
    descricao: "",
    status: "Não configurada",
  });

  /* =========================
     TROCA DE ABA
  ========================= */

  function mudarAba(nomeAba) {
    setAba(nomeAba);
    setFormAberto(null);
  }

  /* =========================
     ADICIONAR MATERIAL
  ========================= */

  function adicionarMaterial() {
    if (!novoMaterial.nome.trim()) {
      return;
    }

    setMateriais([
      ...materiais,
      {
        id: Date.now(),
        ...novoMaterial,
      },
    ]);

    setNovoMaterial({
      nome: "",
      descricao: "",
      unidade: "kg",
      status: "Ativa",
    });

    setFormAberto(null);
  }

  /* =========================
     ADICIONAR DESTINAÇÃO
  ========================= */

  function adicionarDestinacao() {
    if (!novaDestinacao.nome.trim()) {
      return;
    }

    setDestinacoes([
      ...destinacoes,
      {
        id: Date.now(),
        ...novaDestinacao,
      },
    ]);

    setNovaDestinacao({
      nome: "",
      descricao: "",
      status: "Ativa",
    });

    setFormAberto(null);
  }

  /* =========================
     ADICIONAR DOCUMENTO
  ========================= */

  function adicionarDocumento() {
    if (!novoDocumento.nome.trim()) {
      return;
    }

    setDocumentos([
      ...documentos,
      {
        id: Date.now(),
        ...novoDocumento,
      },
    ]);

    setNovoDocumento({
      nome: "",
      aplicacao: "Todos",
      obrigatoriedade: "Opcional",
      status: "Ativo",
    });

    setFormAberto(null);
  }

  /* =========================
     ADICIONAR INTEGRAÇÃO
  ========================= */

  function adicionarIntegracao() {
    if (!novaIntegracao.nome.trim()) {
      return;
    }

    setIntegracoes([
      ...integracoes,
      {
        id: Date.now(),
        ...novaIntegracao,
      },
    ]);

    setNovaIntegracao({
      nome: "",
      categoria: "Identificação",
      descricao: "",
      status: "Não configurada",
    });

    setFormAberto(null);
  }

  return (
    <div>
      <div className="cabecalho-pagina">
        <div>
          <h2>Configurações</h2>

          <p>
            Parâmetros gerais utilizados na operação da ECOMETRIA.
          </p>
        </div>
      </div>

      {/* =========================
          ABAS
      ========================= */}

      <div className="abas-configuracoes">
        <button
          className={aba === "Geral" ? "aba-config ativa" : "aba-config"}
          onClick={() => mudarAba("Geral")}
        >
          Geral
        </button>

        <button
          className={aba === "Materiais" ? "aba-config ativa" : "aba-config"}
          onClick={() => mudarAba("Materiais")}
        >
          Materiais
        </button>

        <button
          className={
            aba === "Destinações" ? "aba-config ativa" : "aba-config"
          }
          onClick={() => mudarAba("Destinações")}
        >
          Destinações
        </button>

        <button
          className={aba === "Documentos" ? "aba-config ativa" : "aba-config"}
          onClick={() => mudarAba("Documentos")}
        >
          Documentos
        </button>

        <button
          className={aba === "Operação" ? "aba-config ativa" : "aba-config"}
          onClick={() => mudarAba("Operação")}
        >
          Operação
        </button>

        <button
          className={
            aba === "Integrações" ? "aba-config ativa" : "aba-config"
          }
          onClick={() => mudarAba("Integrações")}
        >
          Integrações
        </button>
      </div>

      {/* =========================
          GERAL
      ========================= */}

      {aba === "Geral" && (
        <div className="form-evento">
          <section className="secao-formulario">
            <div className="titulo-secao">
              <span className="numero-secao">1</span>

              <div>
                <h3>Configurações gerais</h3>

                <p>
                  Informações básicas da plataforma.
                </p>
              </div>
            </div>

            <div className="grid-formulario">
              <div className="campo-formulario campo-grande">
                <label>Nome da plataforma</label>

                <div className="valor-fixo-config">
                  ECOMETRIA
                </div>
              </div>

              <div className="campo-formulario">
                <label>Idioma</label>

                <select defaultValue="Português">
                  <option>Português</option>
                </select>
              </div>

              <div className="campo-formulario">
                <label>Unidade padrão de massa</label>

                <select defaultValue="kg">
                  <option value="kg">kg</option>
                  <option value="t">tonelada</option>
                </select>
              </div>

              <div className="campo-formulario">
                <label>Fuso horário</label>

                <select defaultValue="Brasília">
                  <option>Brasília</option>
                </select>
              </div>
            </div>
          </section>

          <div className="acoes-formulario">
            <button
              type="button"
              className="botao-principal"
            >
              Salvar configurações
            </button>
          </div>
        </div>
      )}

      {/* =========================
          MATERIAIS
      ========================= */}

      {aba === "Materiais" && (
        <div>
          <div className="cabecalho-config-interno">
            <div>
              <h3>Classes de materiais</h3>

              <p>
                Categorias disponíveis para classificação dos registros.
              </p>
            </div>

            <button
              className="botao-principal"
              onClick={() => setFormAberto("material")}
            >
              + Nova Classe
            </button>
          </div>

          {formAberto === "material" && (
            <div className="form-config-rapido">
              <div className="cabecalho-form-config">
                <div>
                  <h3>Nova Classe de Material</h3>

                  <p>
                    Cadastre uma categoria de material utilizada nos eventos.
                  </p>
                </div>
              </div>

              <div className="grid-formulario">
                <div className="campo-formulario">
                  <label>Nome da classe *</label>

                  <input
                    type="text"
                    placeholder="Ex.: Papel e papelão"
                    value={novoMaterial.nome}
                    onChange={(e) =>
                      setNovoMaterial({
                        ...novoMaterial,
                        nome: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="campo-formulario campo-grande">
                  <label>Descrição</label>

                  <input
                    type="text"
                    placeholder="Descrição da classe"
                    value={novoMaterial.descricao}
                    onChange={(e) =>
                      setNovoMaterial({
                        ...novoMaterial,
                        descricao: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="campo-formulario">
                  <label>Unidade padrão</label>

                  <select
                    value={novoMaterial.unidade}
                    onChange={(e) =>
                      setNovoMaterial({
                        ...novoMaterial,
                        unidade: e.target.value,
                      })
                    }
                  >
                    <option value="kg">kg</option>
                    <option value="t">tonelada</option>
                  </select>
                </div>

                <div className="campo-formulario">
                  <label>Status</label>

                  <select
                    value={novoMaterial.status}
                    onChange={(e) =>
                      setNovoMaterial({
                        ...novoMaterial,
                        status: e.target.value,
                      })
                    }
                  >
                    <option>Ativa</option>
                    <option>Inativa</option>
                  </select>
                </div>
              </div>

              <div className="acoes-config-rapido">
                <button
                  type="button"
                  className="botao-secundario"
                  onClick={() => setFormAberto(null)}
                >
                  Cancelar
                </button>

                <button
                  type="button"
                  className="botao-principal"
                  disabled={!novoMaterial.nome.trim()}
                  onClick={adicionarMaterial}
                >
                  Adicionar classe
                </button>
              </div>
            </div>
          )}

          <div className="tabela-container">
            <table>
              <thead>
                <tr>
                  <th>Classe</th>
                  <th>Descrição</th>
                  <th>Unidade</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {materiais.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="sem-registros">
                      Nenhuma classe cadastrada.
                    </td>
                  </tr>
                ) : (
                  materiais.map((material) => (
                    <tr key={material.id}>
                      <td>{material.nome}</td>
                      <td>{material.descricao || "--"}</td>
                      <td>{material.unidade}</td>
                      <td>{material.status}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* =========================
          DESTINAÇÕES
      ========================= */}

      {aba === "Destinações" && (
        <div>
          <div className="cabecalho-config-interno">
            <div>
              <h3>Tipos de destinação</h3>

              <p>
                Opções utilizadas no encerramento dos fluxos de materiais.
              </p>
            </div>

            <button
              className="botao-principal"
              onClick={() => setFormAberto("destinacao")}
            >
              + Novo Tipo
            </button>
          </div>

          {formAberto === "destinacao" && (
            <div className="form-config-rapido">
              <div className="cabecalho-form-config">
                <div>
                  <h3>Novo Tipo de Destinação</h3>

                  <p>
                    Cadastre uma forma de destinação utilizada pela plataforma.
                  </p>
                </div>
              </div>

              <div className="grid-formulario">
                <div className="campo-formulario">
                  <label>Nome *</label>

                  <input
                    type="text"
                    placeholder="Ex.: Reciclagem"
                    value={novaDestinacao.nome}
                    onChange={(e) =>
                      setNovaDestinacao({
                        ...novaDestinacao,
                        nome: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="campo-formulario campo-grande">
                  <label>Descrição</label>

                  <input
                    type="text"
                    placeholder="Descrição da destinação"
                    value={novaDestinacao.descricao}
                    onChange={(e) =>
                      setNovaDestinacao({
                        ...novaDestinacao,
                        descricao: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="campo-formulario">
                  <label>Status</label>

                  <select
                    value={novaDestinacao.status}
                    onChange={(e) =>
                      setNovaDestinacao({
                        ...novaDestinacao,
                        status: e.target.value,
                      })
                    }
                  >
                    <option>Ativa</option>
                    <option>Inativa</option>
                  </select>
                </div>
              </div>

              <div className="acoes-config-rapido">
                <button
                  type="button"
                  className="botao-secundario"
                  onClick={() => setFormAberto(null)}
                >
                  Cancelar
                </button>

                <button
                  type="button"
                  className="botao-principal"
                  disabled={!novaDestinacao.nome.trim()}
                  onClick={adicionarDestinacao}
                >
                  Adicionar tipo
                </button>
              </div>
            </div>
          )}

          <div className="tabela-container">
            <table>
              <thead>
                <tr>
                  <th>Tipo de destinação</th>
                  <th>Descrição</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {destinacoes.length === 0 ? (
                  <tr>
                    <td colSpan="3" className="sem-registros">
                      Nenhum tipo de destinação cadastrado.
                    </td>
                  </tr>
                ) : (
                  destinacoes.map((destinacao) => (
                    <tr key={destinacao.id}>
                      <td>{destinacao.nome}</td>
                      <td>{destinacao.descricao || "--"}</td>
                      <td>{destinacao.status}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* =========================
          DOCUMENTOS
      ========================= */}

      {aba === "Documentos" && (
        <div>
          <div className="cabecalho-config-interno">
            <div>
              <h3>Tipos de documentos</h3>

              <p>
                Categorias de documentos e evidências aceitas pela plataforma.
              </p>
            </div>

            <button
              className="botao-principal"
              onClick={() => setFormAberto("documento")}
            >
              + Novo Tipo
            </button>
          </div>

          {formAberto === "documento" && (
            <div className="form-config-rapido">
              <div className="cabecalho-form-config">
                <div>
                  <h3>Novo Tipo de Documento</h3>

                  <p>
                    Cadastre uma categoria de documento ou evidência.
                  </p>
                </div>
              </div>

              <div className="grid-formulario">
                <div className="campo-formulario">
                  <label>Nome do documento *</label>

                  <input
                    type="text"
                    placeholder="Ex.: Ticket de pesagem"
                    value={novoDocumento.nome}
                    onChange={(e) =>
                      setNovoDocumento({
                        ...novoDocumento,
                        nome: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="campo-formulario">
                  <label>Aplicação</label>

                  <select
                    value={novoDocumento.aplicacao}
                    onChange={(e) =>
                      setNovoDocumento({
                        ...novoDocumento,
                        aplicacao: e.target.value,
                      })
                    }
                  >
                    <option>Todos</option>
                    <option>Evento / Coleta</option>
                    <option>Movimentação</option>
                    <option>Destinação</option>
                    <option>Organização</option>
                    <option>Equipamento</option>
                  </select>
                </div>

                <div className="campo-formulario">
                  <label>Obrigatoriedade</label>

                  <select
                    value={novoDocumento.obrigatoriedade}
                    onChange={(e) =>
                      setNovoDocumento({
                        ...novoDocumento,
                        obrigatoriedade: e.target.value,
                      })
                    }
                  >
                    <option>Opcional</option>
                    <option>Obrigatório</option>
                    <option>Conforme regra</option>
                  </select>
                </div>

                <div className="campo-formulario">
                  <label>Status</label>

                  <select
                    value={novoDocumento.status}
                    onChange={(e) =>
                      setNovoDocumento({
                        ...novoDocumento,
                        status: e.target.value,
                      })
                    }
                  >
                    <option>Ativo</option>
                    <option>Inativo</option>
                  </select>
                </div>
              </div>

              <div className="acoes-config-rapido">
                <button
                  type="button"
                  className="botao-secundario"
                  onClick={() => setFormAberto(null)}
                >
                  Cancelar
                </button>

                <button
                  type="button"
                  className="botao-principal"
                  disabled={!novoDocumento.nome.trim()}
                  onClick={adicionarDocumento}
                >
                  Adicionar documento
                </button>
              </div>
            </div>
          )}

          <div className="tabela-container">
            <table>
              <thead>
                <tr>
                  <th>Documento</th>
                  <th>Aplicação</th>
                  <th>Obrigatoriedade</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {documentos.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="sem-registros">
                      Nenhum tipo de documento cadastrado.
                    </td>
                  </tr>
                ) : (
                  documentos.map((documento) => (
                    <tr key={documento.id}>
                      <td>{documento.nome}</td>
                      <td>{documento.aplicacao}</td>
                      <td>{documento.obrigatoriedade}</td>
                      <td>{documento.status}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* =========================
          OPERAÇÃO
      ========================= */}

      {aba === "Operação" && (
        <div className="form-evento">
          <section className="secao-formulario">
            <div className="titulo-secao">
              <span className="numero-secao">1</span>

              <div>
                <h3>Regras dos eventos</h3>

                <p>
                  Defina parâmetros gerais para criação e fechamento dos
                  registros.
                </p>
              </div>
            </div>

            <div className="grade-opcoes-config">
              <label className="config-check">
                <input type="checkbox" />

                <div>
                  <strong>
                    Exigir massa para finalizar evento
                  </strong>

                  <span>
                    Impede o encerramento quando não houver massa registrada.
                  </span>
                </div>
              </label>

              <label className="config-check">
                <input type="checkbox" />

                <div>
                  <strong>
                    Exigir destino para finalizar evento
                  </strong>

                  <span>
                    O evento permanece aberto até possuir destino registrado.
                  </span>
                </div>
              </label>

              <label className="config-check">
                <input type="checkbox" />

                <div>
                  <strong>
                    Alertar divergência de massa
                  </strong>

                  <span>
                    Gera indicação quando houver diferença entre etapas.
                  </span>
                </div>
              </label>

              <label className="config-check">
                <input type="checkbox" />

                <div>
                  <strong>
                    Permitir operação offline
                  </strong>

                  <span>
                    Registros poderão ser sincronizados posteriormente.
                  </span>
                </div>
              </label>
            </div>
          </section>

          <section className="secao-formulario">
            <div className="titulo-secao">
              <span className="numero-secao">2</span>

              <div>
                <h3>Limites de alerta</h3>

                <p>
                  Parâmetros utilizados futuramente nas validações automáticas.
                </p>
              </div>
            </div>

            <div className="grid-formulario">
              <div className="campo-formulario">
                <label>Divergência de massa (%)</label>

                <input
                  type="number"
                  placeholder="Ex.: 5"
                />
              </div>

              <div className="campo-formulario">
                <label>Tempo máximo sem sincronização</label>

                <input
                  type="number"
                  placeholder="Minutos"
                />
              </div>

              <div className="campo-formulario">
                <label>Prazo para tratamento de inconsistência</label>

                <input
                  type="number"
                  placeholder="Horas"
                />
              </div>
            </div>
          </section>

          <div className="acoes-formulario">
            <button
              type="button"
              className="botao-principal"
            >
              Salvar regras
            </button>
          </div>
        </div>
      )}

      {/* =========================
          INTEGRAÇÕES
      ========================= */}

      {aba === "Integrações" && (
        <div>
          <div className="cabecalho-config-interno">
            <div>
              <h3>Integrações</h3>

              <p>
                Sistemas, equipamentos e serviços externos conectados à
                ECOMETRIA.
              </p>
            </div>

            <button
              className="botao-principal"
              onClick={() => setFormAberto("integracao")}
            >
              + Nova Integração
            </button>
          </div>

          <div className="grade-integracoes">
            <div className="card-integracao">
              <div>
                <h3>Identificação</h3>

                <p>
                  QR Code, RFID, NFC ou tecnologias equivalentes.
                </p>
              </div>

              <span className="status-integracao">
                Categoria
              </span>
            </div>

            <div className="card-integracao">
              <div>
                <h3>Pesagem</h3>

                <p>
                  Balanças e sistemas de registro de massa.
                </p>
              </div>

              <span className="status-integracao">
                Categoria
              </span>
            </div>

            <div className="card-integracao">
              <div>
                <h3>IoT</h3>

                <p>
                  Sensores, gateways e dispositivos de campo.
                </p>
              </div>

              <span className="status-integracao">
                Categoria
              </span>
            </div>

            <div className="card-integracao">
              <div>
                <h3>API externa</h3>

                <p>
                  Sistemas institucionais ou serviços de terceiros.
                </p>
              </div>

              <span className="status-integracao">
                Categoria
              </span>
            </div>
          </div>

          {formAberto === "integracao" && (
            <div className="form-config-rapido espacamento-superior">
              <div className="cabecalho-form-config">
                <div>
                  <h3>Nova Integração</h3>

                  <p>
                    Registre uma integração prevista para a ECOMETRIA.
                  </p>
                </div>
              </div>

              <div className="grid-formulario">
                <div className="campo-formulario">
                  <label>Nome *</label>

                  <input
                    type="text"
                    placeholder="Ex.: Balança do Ecoponto 01"
                    value={novaIntegracao.nome}
                    onChange={(e) =>
                      setNovaIntegracao({
                        ...novaIntegracao,
                        nome: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="campo-formulario">
                  <label>Categoria</label>

                  <select
                    value={novaIntegracao.categoria}
                    onChange={(e) =>
                      setNovaIntegracao({
                        ...novaIntegracao,
                        categoria: e.target.value,
                      })
                    }
                  >
                    <option>Identificação</option>
                    <option>Pesagem</option>
                    <option>IoT</option>
                    <option>API externa</option>
                    <option>Outro</option>
                  </select>
                </div>

                <div className="campo-formulario campo-grande">
                  <label>Descrição</label>

                  <input
                    type="text"
                    placeholder="Finalidade da integração"
                    value={novaIntegracao.descricao}
                    onChange={(e) =>
                      setNovaIntegracao({
                        ...novaIntegracao,
                        descricao: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="campo-formulario">
                  <label>Status</label>

                  <select
                    value={novaIntegracao.status}
                    onChange={(e) =>
                      setNovaIntegracao({
                        ...novaIntegracao,
                        status: e.target.value,
                      })
                    }
                  >
                    <option>Não configurada</option>
                    <option>Em configuração</option>
                    <option>Ativa</option>
                    <option>Inativa</option>
                  </select>
                </div>
              </div>

              <div className="acoes-config-rapido">
                <button
                  type="button"
                  className="botao-secundario"
                  onClick={() => setFormAberto(null)}
                >
                  Cancelar
                </button>

                <button
                  type="button"
                  className="botao-principal"
                  disabled={!novaIntegracao.nome.trim()}
                  onClick={adicionarIntegracao}
                >
                  Adicionar integração
                </button>
              </div>
            </div>
          )}

          <div className="tabela-container espacamento-superior">
            <table>
              <thead>
                <tr>
                  <th>Integração</th>
                  <th>Categoria</th>
                  <th>Descrição</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {integracoes.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="sem-registros">
                      Nenhuma integração cadastrada.
                    </td>
                  </tr>
                ) : (
                  integracoes.map((integracao) => (
                    <tr key={integracao.id}>
                      <td>{integracao.nome}</td>
                      <td>{integracao.categoria}</td>
                      <td>{integracao.descricao || "--"}</td>
                      <td>{integracao.status}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Configuracoes;