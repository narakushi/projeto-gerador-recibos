import React from "react";
import Button from "./Button";
import logo from "../imgs/logo.svg";
import "../styles/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container-img">
          <img src={logo} alt="" />
          <div className="footer__pipe--right"></div>
        </div>
        <div className="footer__texts">
          <span>Todos os direitos reservados - Gerador de Recibos</span>
          <span>Desenvolvido por Tainá Santana</span>
        </div>
        <div className="footer__buttons">
          <Button text="Entrar" customClass="button-variant" />
          <div className="footer__pipe"></div>
          <Button text="Fazer cadastro" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
