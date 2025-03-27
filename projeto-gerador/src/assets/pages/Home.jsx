import React from "react";
import "../ui/styles/Home.css";
import NavBar from "../ui/components/Navbar";
import Title from "../ui/components/Title";
import Form from "../ui/components/Form";
import "../ui/styles/Home.css";
import inputsDataUser from "../ui/jsons/inputsDataUser.json"
import Container from "../ui/components/Container";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Container>
        <Title text="Bem-vindo ao gerador de recibos" />
        <p className="home__text">Gere aqui de forma fácil seus documentos</p>
        <div className="home__container-form">
          <Form data={inputsDataUser}/>
        </div>
      </Container>
    </div>
  );
}

export default Home;
