import React from "react";
import "../ui/styles/Home.css";
import NavBar from "../ui/components/Navbar";
import Title from "../ui/components/Title";
import Form from "../ui/components/Form";
import "../ui/styles/Home.css";
import inputsDataReceiver from "../ui/jsons/inputsDataReceiver.json";
import { IoIosArrowForward } from "react-icons/io";

const RegisterStepTwo = () => {
  return (
    <>
      <NavBar />
      <div className="home">
        <Title text="Gere aqui de forma fácil seus documentos" />
        <p className="home__text">
          Obtenha em formato PDF a segurança das suas ações de compra e venda!
        </p>
        <div className="home__container-form">
          <Form
            data={inputsDataReceiver}
            subText="Obtenha em formato PDF a segurança das suas ações de compra e venda!"
            btnText="Concluir cadastro"
            url="/recipt-generator"
            icon={<IoIosArrowForward />}
          />
        </div>
      </div>
    </>
  );
};

export default RegisterStepTwo;
