import { useMemo, useState } from "react";

import {
  sankey,
  sankeyJustify,
  sankeyLinkHorizontal,
} from "d3-sankey";

import residuos from "../data/residuosFestaJunina.json";
import operacao from "../data/operacaoFestaJunina.json";

import "./FluxoSankey.css";

function FluxoSankey() {
  const [eventoSelecionado, setEventoSelecionado] =
    useState("todos");

  const largura = 1100;
  const altura = 420;

  const massaTotal = residuos.reduce(
    (total, residuo) => total + residuo.massaKg,
    0
  );

  const coresMateriais = {
    Orgânicos: "#6F7A4B",
    Recicláveis: "#B85F3A",
    Latinhas: "#D8C7B2",
    Rejeitos: "#7F2F24",
  };

  const dadosGrafico = useMemo(() => {
    const destinos = [
      ...new Set(
        residuos.map((residuo) => residuo.destino)
      ),
    ];

    const nodes = [
      {
        id: "origem",
        nome: operacao.organizacaoGeradora,
        subtitulo: operacao.evento.nome,
        tipo: "origem",
      },

      ...residuos.map((residuo) => ({
        id: `material-${residuo.tipoResiduo}`,
        nome: residuo.tipoResiduo,
        massa: residuo.massaKg,
        tipo: "material",
      })),

      ...destinos.map((destino, index) => ({
        id: `destino-${index}`,
        nome: destino,
        tipo: "destino",
      })),
    ];

    const linksOrigemMaterial = residuos.map(
      (residuo) => ({
        source: "origem",
        target: `material-${residuo.tipoResiduo}`,
        value: residuo.massaKg,
        material: residuo.tipoResiduo,
      })
    );

    const linksMaterialDestino = residuos.map(
      (residuo) => ({
        source: `material-${residuo.tipoResiduo}`,
        target: `destino-${destinos.indexOf(
          residuo.destino
        )}`,
        value: residuo.massaKg,
        material: residuo.tipoResiduo,
      })
    );

    return {
      nodes,
      links: [
        ...linksOrigemMaterial,
        ...linksMaterialDestino,
      ],
    };
  }, [eventoSelecionado]);

  const grafico = useMemo(() => {
    const gerador = sankey()
      .nodeId((node) => node.id)
      .nodeAlign(sankeyJustify)
      .nodeWidth(15)
      .nodePadding(25)
      .extent([
        [165, 40],
        [900, altura - 40],
      ]);

    return gerador({
      nodes: dadosGrafico.nodes.map((node) => ({
        ...node,
      })),

      links: dadosGrafico.links.map((link) => ({
        ...link,
      })),
    });
  }, [dadosGrafico]);

  function formatarMassa(valor) {
    return valor.toLocaleString("pt-BR", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
  }

  function calcularPercentual(valor) {
    return ((valor / massaTotal) * 100).toLocaleString(
      "pt-BR",
      {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      }
    );
  }

  function corDoNo(node) {
    if (node.tipo === "origem") {
      return "#2B2F24";
    }

    if (node.tipo === "destino") {
      return "#6F7A4B";
    }

    return coresMateriais[node.nome] || "#B85F3A";
  }

  function corDoFluxo(link) {
    return (
      coresMateriais[link.material] ||
      "#B85F3A"
    );
  }

  return (
    <section className="painel-sankey">

      {/* CABEÇALHO */}

      <div className="cabecalho-sankey">

        <div>

          <span className="inicio-etiqueta">
            FLUXO DE RASTREABILIDADE
          </span>

          <h2>
            Origem → Material → Destino
          </h2>

          <p>
            
          </p>

        </div>


        <div className="filtro-sankey">

          <label>
            Evento
          </label>

          <select
            value={eventoSelecionado}
            onChange={(event) =>
              setEventoSelecionado(
                event.target.value
              )
            }
          >

            <option value="todos">
              Todos os eventos
            </option>

            <option value="festa-junina-2026">
              Festa Junina Lixo Zero 2026
            </option>

          </select>

        </div>

      </div>


      {/* TÍTULOS */}

      <div className="titulos-sankey">

        <span>ORIGEM</span>

        <span>MATERIAL</span>

        <span>DESTINO</span>

      </div>


      {/* GRÁFICO */}

      <div className="area-sankey">

        <svg
          viewBox={`0 0 ${largura} ${altura}`}
          className="grafico-sankey"
          role="img"
          aria-label="Fluxo de rastreabilidade dos resíduos"
        >

          {/* CONEXÕES */}

          <g>

            {grafico.links.map(
              (link, index) => (
                <path
                  key={index}
                  d={
                    sankeyLinkHorizontal()(
                      link
                    )
                  }
                  fill="none"
                  stroke={corDoFluxo(link)}
                  strokeOpacity="0.5"
                  strokeWidth={Math.max(
                    1,
                    link.width
                  )}
                  className="link-sankey"
                >

                  <title>
                    {`${link.material}: ${calcularPercentual(
                      link.value
                    )}% - ${formatarMassa(
                      link.value
                    )} kg`}
                  </title>

                </path>
              )
            )}

          </g>


          {/* NÓS */}

          <g>

            {grafico.nodes.map((node) => {

              const centroY =
                (node.y0 + node.y1) / 2;

              return (
                <g key={node.id}>

                  <rect
                    x={node.x0}
                    y={node.y0}
                    width={
                      node.x1 - node.x0
                    }
                    height={Math.max(
                      5,
                      node.y1 - node.y0
                    )}
                    rx="3"
                    fill={corDoNo(node)}
                  />


                  {/* ORIGEM */}

                  {node.tipo ===
                    "origem" && (
                    <>
                      <text
                        x={node.x0 - 12}
                        y={centroY - 8}
                        textAnchor="end"
                        className="texto-no-sankey"
                      >
                        {node.nome}
                      </text>

                      <text
                        x={node.x0 - 12}
                        y={centroY + 10}
                        textAnchor="end"
                        className="subtexto-no-sankey"
                      >
                        {node.subtitulo}
                      </text>
                    </>
                  )}


                  {/* MATERIAL */}

                  {node.tipo ===
                    "material" && (
                    <>
                      <text
                        x={node.x0 - 12}
                        y={centroY - 7}
                        textAnchor="end"
                        className="texto-no-sankey"
                      >
                        {node.nome}
                      </text>

                      <text
                        x={node.x0 - 12}
                        y={centroY + 11}
                        textAnchor="end"
                        className="massa-no-sankey"
                      >
                        {calcularPercentual(
                          node.massa
                        )}%
                      </text>
                    </>
                  )}


                  {/* DESTINO */}

                  {node.tipo ===
                    "destino" && (
                    <text
                      x={node.x1 + 12}
                      y={centroY + 4}
                      textAnchor="start"
                      className="texto-no-sankey"
                    >
                      {node.nome}
                    </text>
                  )}

                </g>
              );
            })}

          </g>

        </svg>

      </div>


      {/* LEGENDA EM KG */}

      <div className="legenda-sankey">

        {residuos.map((residuo) => (

          <div
            key={residuo.tipoResiduo}
            className="item-legenda-sankey"
          >

            <span
              className="cor-legenda-sankey"
              style={{
                background:
                  coresMateriais[
                    residuo.tipoResiduo
                  ],
              }}
            />

            <span>
              {residuo.tipoResiduo}
            </span>

            <strong>
              {formatarMassa(
                residuo.massaKg
              )} kg
            </strong>

          </div>

        ))}

      </div>

    </section>
  );
}

export default FluxoSankey;