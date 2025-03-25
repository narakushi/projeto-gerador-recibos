import React from "react";
import Button from "./Button";
import logo from "../imgs/logo.svg";

function Footer() {
  return (
    <footer>
      <div>
        <img src={logo} alt="" />
      </div>
      <div></div>
      <div>
        <span>Todos os direitos reservados - Gerador de Recibos</span>
        <span>Desenvolvido por Tainá Santana</span>
      </div>
      <div>
        <Button text="Entrar" />
        <Button text="Fazer cadastro" />
      </div>
    </footer>
  );
}

export default Footer;
