import React from "react";
import "../ui/styles/Home.css";
import NavBar from "../ui/components/Navbar";
import Title from "../ui/components/Title";
import Form from "../ui/components/Form";
import "../ui/styles/Home.css";

function Home() {
  return (
    <section className="home">
      <NavBar />
      <Title text="Bem-vindo ao gerador de recibos" />
      <p>Gere aqui de forma fácil seus documentos</p>
      <Form />
    </section>
  );
}

export default Home;
