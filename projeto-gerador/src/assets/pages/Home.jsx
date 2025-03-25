import React from "react";
import "../ui/styles/Home.css";
import NavBar from "../ui/components/Navbar";
import Button from "../ui/components/Button";
import logo from "../ui/imgs/logo.svg";

function Home() {
  return (
    <section>
      <NavBar />
      <h1>Bem-vindo ao gerador de recibos</h1>
      <p>Gere aqui de forma fácil seus documentos</p>
      <form action="">
        <h2>Comece informando seus dados para cadastro</h2>
        <div>
          <div>
            <label htmlFor="">Nome</label>
            <input type="text" name="name" id="name" />
          </div>
          <div>
            <label htmlFor="">Sobrenome completo</label>
            <input type="text" name="lastName" id="lastName" />
          </div>
        </div>

        <div>
          <div>
            <label htmlFor="">CPF</label>
            <input type="text" name="cpf" id="cpf" />
          </div>
          <div>
            <label htmlFor="">CEP</label>
            <input type="text" name="cep" id="cep" />
          </div>
        </div>

        <div>
          <div>
            <label htmlFor="">Endereço</label>
            <input type="address" name="address" id="address" />
          </div>
          <div>
            <label htmlFor="">Número da casa</label>
            <input type="text" name="lastName" id="lastName" />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="">Motivo do recibo</label>
            <input type="text" name="reason" id="reasonReceipt" />
          </div>
        </div>

        <Button text="Inserir dados do recebedor" icon=">" />
      </form>

      <footer>
        <div>
          <img src={logo} alt="" />
        </div>
        <div></div>
        <div>
          <p>Todos os direitos reservados - Gerador de Recibos</p>
          <p>Desenvolvido por Tainá Santana</p>
        </div>
        <div>
          <Button text="Entrar" />
          <Button text="Fazer cadastro" />
        </div>
      </footer>
    </section>
  );
}

export default Home;
