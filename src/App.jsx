import { useState } from "react";

import "./App.css";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Inicio from "./pages/Inicio";
import Dashboard from "./pages/Dashboard";
import DashboardOrganizacao from "./pages/DashboardOrganizacao";

import PontosColeta from "./pages/PontosColeta";

import Eventos from "./pages/Eventos";
import NovoEvento from "./pages/NovoEvento";

import Movimentacoes from "./pages/Movimentacoes";
import NovaMovimentacao from "./pages/NovaMovimentacao";

import Destinacoes from "./pages/Destinacoes";
import NovaDestinacao from "./pages/NovaDestinacao";

import Documentos from "./pages/Documentos";
import NovoDocumento from "./pages/NovoDocumento";

import Equipamentos from "./pages/Equipamentos";
import NovoEquipamento from "./pages/NovoEquipamento";

import Inconsistencias from "./pages/Inconsistencias";
import DetalheInconsistencia from "./pages/DetalheInconsistencia";

import SolicitacoesCadastro from "./pages/SolicitacoesCadastro";
import AnaliseCadastro from "./pages/AnaliseCadastro";

import Organizacoes from "./pages/Organizacoes";
import DetalheOrganizacao from "./pages/DetalheOrganizacao";

import Usuarios from "./pages/Usuarios";
import NovoUsuario from "./pages/NovoUsuario";

import Relatorios from "./pages/Relatorios";
import Configuracoes from "./pages/Configuracoes";

function App() {
  const [pagina, setPagina] =
    useState("Início");

  /*
    O protótipo agora começa como visitante.
    Isso simula alguém entrando no site
    sem estar autenticado.
  */

  const [perfil, setPerfil] =
    useState("Visitante");

  function trocarPerfil(novoPerfil) {
    setPerfil(novoPerfil);

    /*
      Sempre voltamos ao Início
      quando o perfil muda.
    */

    setPagina("Início");
  }

  function renderizarPagina() {
    switch (pagina) {

      case "Dashboard ECOMETRIA":
        return <Dashboard />;

      case "Dashboard da Organização":
        return <DashboardOrganizacao />;

      case "Pontos de Coleta":
        return <PontosColeta />;

      case "Eventos / Coletas":
        return (
          <Eventos
            setPagina={setPagina}
          />
        );

      case "Novo Evento":
        return (
          <NovoEvento
            setPagina={setPagina}
          />
        );

      case "Movimentações":
        return (
          <Movimentacoes
            setPagina={setPagina}
          />
        );

      case "Nova Movimentação":
        return (
          <NovaMovimentacao
            setPagina={setPagina}
          />
        );

      case "Destinações":
        return (
          <Destinacoes
            setPagina={setPagina}
          />
        );

      case "Nova Destinação":
        return (
          <NovaDestinacao
            setPagina={setPagina}
          />
        );

      case "Documentos":
        return (
          <Documentos
            setPagina={setPagina}
          />
        );

      case "Novo Documento":
        return (
          <NovoDocumento
            setPagina={setPagina}
          />
        );

      case "Equipamentos":
        return (
          <Equipamentos
            setPagina={setPagina}
          />
        );

      case "Novo Equipamento":
        return (
          <NovoEquipamento
            setPagina={setPagina}
          />
        );

      case "Inconsistências":
        return (
          <Inconsistencias
            setPagina={setPagina}
          />
        );

      case "Detalhe Inconsistência":
        return (
          <DetalheInconsistencia
            setPagina={setPagina}
          />
        );

      case "Solicitações de Cadastro":
        return (
          <SolicitacoesCadastro
            setPagina={setPagina}
          />
        );

      case "Análise de Cadastro":
        return (
          <AnaliseCadastro
            setPagina={setPagina}
          />
        );

      case "Organizações":
        return (
          <Organizacoes
            setPagina={setPagina}
          />
        );

      case "Detalhes da Organização":
        return (
          <DetalheOrganizacao
            setPagina={setPagina}
          />
        );

      case "Usuários":
        return (
          <Usuarios
            setPagina={setPagina}
          />
        );

      case "Novo Usuário":
        return (
          <NovoUsuario
            setPagina={setPagina}
          />
        );

      case "Relatórios":
        return <Relatorios />;

      case "Configurações":
        return <Configuracoes />;

      case "Início":
      default:
        return <Inicio />;
    }
  }

  return (
    <div className="app">

      <Sidebar
        pagina={pagina}
        setPagina={setPagina}
        perfil={perfil}
      />

      <main className="main">

        <Header
          pagina={pagina}
          perfil={perfil}
          setPerfil={trocarPerfil}
        />

        <section className="conteudo">
          {renderizarPagina()}
        </section>

      </main>

    </div>
  );
}

export default App;