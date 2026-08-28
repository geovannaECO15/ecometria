import armazenamentoOrganicos from "../assets/festa-junina/armazenamento-organicos.jpeg";
import equipeLixoZero from "../assets/festa-junina/equipe-lixo-zero.jpeg";
import estacoesSegregacao from "../assets/festa-junina/estacoes-segregacao.jpeg";
import latinhasRecuperadas from "../assets/festa-junina/latinhas-recuperadas.jpeg";
import rejeitosSegregados from "../assets/festa-junina/rejeitos-segregados.jpeg";

import logoDmae from "../assets/festa-junina/logo-dmae.png";
import logoEas from "../assets/festa-junina/logo-eas.jpg";
import logoUfu from "../assets/festa-junina/logo-ufu.png";

import FluxoSankey from "../components/FluxoSankey";

import "./Inicio.css";

function Inicio() {
  return (
    <div>

      {/* HERO */}

      <section className="hero-ecometria">

        <div className="hero-ecometria-conteudo">

          <div className="hero-identificacao">
            <span>ECOMETRIA</span>
            <span className="hero-ponto">•</span>
            <span>2026</span>
          </div>

          <h1>
            Rastreabilidade para uma
            <br />
            economia mais circular
          </h1>

        </div>


        {/* ELEMENTO VISUAL */}

        <div className="hero-ecometria-visual">

          <div className="circulo circulo-externo"></div>

          <div className="circulo circulo-interno"></div>

          <div className="forma-terracota"></div>

          <div className="forma-bege"></div>

          <div className="linha-visual linha-visual-1"></div>

          <div className="linha-visual linha-visual-2"></div>

          <div className="hero-marca-central">

            <span>ORIGEM</span>

            <div></div>

            <span>DESTINO</span>

          </div>

        </div>

      </section>


      {/* ECOMETRIA EM NÚMEROS */}

      <section className="secao-inicio">

        <div className="cabecalho-secao-inicio">

          <span className="inicio-etiqueta">
            IMPACTO
          </span>

          <h2>ECOMETRIA em números</h2>

          <p>
            
          </p>

        </div>

        <div className="grade-impacto-inicio">

          <div className="card-impacto-inicio">
            <span>Massa registrada</span>
            <strong>769 kg</strong>
          </div>

          <div className="card-impacto-inicio">
            <span>Recicláveis recuperados</span>
            <strong>211 kg</strong>
          </div>

          <div className="card-impacto-inicio">
            <span>Orgânicos compostados</span>
            <strong>417 kg</strong>
          </div>

          <div className="card-impacto-inicio">
            <span>Desvio do aterro</span>
            <strong>82%</strong>
          </div>

          <div className="card-impacto-inicio">
            <span>Organizações</span>
            <strong>1</strong>
          </div>

          <div className="card-impacto-inicio">
            <span>Operações</span>
            <strong>1</strong>
          </div>

        </div>

      </section>


      {/* FLUXO DE RASTREABILIDADE */}

      <FluxoSankey />


      {/* MÍDIAS E AÇÕES */}

      <section className="secao-inicio">

        <div className="cabecalho-secao-inicio">

          <span className="inicio-etiqueta">
            ECOMETRIA EM AÇÃO
          </span>

          <h2>Mídias e ações</h2>

          <p>
            Registros da Festa Junina Lixo Zero 2026,
            realizada na Paróquia São Pedro.
          </p>

        </div>


        <div className="grade-midias-inicio grade-midias-cinco">

          <article className="card-midia-inicio">

            <img
              src={estacoesSegregacao}
              alt="Estações de segregação da Festa Junina Lixo Zero"
              className="foto-midia-inicio"
            />

            <div className="conteudo-midia-inicio">

              <span>SEGREGAÇÃO</span>

              <h3>Sistema de separação</h3>

              <p>
                Estrutura utilizada durante o evento.
              </p>

            </div>

          </article>


          <article className="card-midia-inicio">

            <img
              src={equipeLixoZero}
              alt="Equipe Lixo Zero durante a Festa Junina"
              className="foto-midia-inicio"
            />

            <div className="conteudo-midia-inicio">

              <span>EQUIPE</span>

              <h3>Equipe Lixo Zero</h3>

              <p>
                Atuação durante a operação.
              </p>

            </div>

          </article>


          <article className="card-midia-inicio">

            <img
              src={latinhasRecuperadas}
              alt="Latinhas separadas durante a Festa Junina"
              className="foto-midia-inicio"
            />

            <div className="conteudo-midia-inicio">

              <span>RECUPERAÇÃO</span>

              <h3>Latinhas recuperadas</h3>

              <p>
                Material segregado para recuperação.
              </p>

            </div>

          </article>


          <article className="card-midia-inicio">

            <img
              src={armazenamentoOrganicos}
              alt="Armazenamento separado de resíduos orgânicos"
              className="foto-midia-inicio"
            />

            <div className="conteudo-midia-inicio">

              <span>ORGÂNICOS</span>

              <h3>Armazenamento separado</h3>

              <p>
                Separação da fração orgânica.
              </p>

            </div>

          </article>


          <article className="card-midia-inicio">

            <img
              src={rejeitosSegregados}
              alt="Rejeitos segregados durante a operação"
              className="foto-midia-inicio"
            />

            <div className="conteudo-midia-inicio">

              <span>REJEITOS</span>

              <h3>Rejeitos segregados</h3>

              <p>
                Fração separada durante a operação.
              </p>

            </div>

          </article>

        </div>

      </section>


      {/* PARCEIROS */}

      <section className="secao-inicio">

        <div className="cabecalho-secao-inicio">

          <span className="inicio-etiqueta">
            REDE ECOMETRIA
          </span>

          <h2>Parceiros</h2>

        </div>


        <div className="grade-parceiros-inicio">

          <div className="card-parceiro-real">

            <div className="area-logo-parceiro">

              <img
                src={logoUfu}
                alt="Universidade Federal de Uberlândia"
              />

            </div>

          </div>


          <div className="card-parceiro-real">

            <div className="area-logo-parceiro">

              <img
                src={logoEas}
                alt="Engenharia Ambiental e Sanitária UFU"
              />

            </div>

          </div>


          <div className="card-parceiro-real">

            <div className="area-logo-parceiro">

              <img
                src={logoDmae}
                alt="DMAE"
              />

            </div>

          </div>

        </div>

      </section>


      {/* CONTATO */}

      <section className="contato-inicio">

        <div>

          <span className="inicio-etiqueta inicio-etiqueta-clara">
            CONTATO
          </span>

          <h2>ECOMETRIA</h2>

          <p>
            Projetos, operações e parcerias.
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
            <span>Localização</span>
            <strong>Uberlândia / MG</strong>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Inicio;