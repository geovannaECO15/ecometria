import { useState } from "react";

import "./App.css";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Inicio from "./pages/Inicio";
import Dashboard from "./pages/Dashboard";

function App() {
  const [pagina, setPagina] = useState("Início");

  function renderizarPagina() {
    switch (pagina) {
      case "Dashboard":
        return <Dashboard />;

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
      />

      <main className="main">

        <Header pagina={pagina} />

        <section className="conteudo">
          {renderizarPagina()}
        </section>

      </main>

    </div>
  );
}

export default App;