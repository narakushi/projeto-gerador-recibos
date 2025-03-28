import React from "react";
import "../ui/styles/Home.css";
import NavBar from "../ui/components/Navbar";
import Title from "../ui/components/Title";
import Form from "../ui/components/Form";
import "../ui/styles/Home.css";
import inputsDataUser from "../ui/jsons/inputsDataUser.json";
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="home">
        <Title text="Bem-vindo ao gerador de recibos" />
        <p className="home__text">Gere aqui de forma fácil seus documentos</p>
        <div className="home__container-form">
          <Form
            data={inputsDataUser}
            subText="Comece informando seus dados para cadastro"
            btnText="Inserir dados do recebedor"
            url="/register-step-two"
            icon={<IoIosArrowForward />}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
