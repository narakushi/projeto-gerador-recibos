import React from 'react';
import logo from "../imgs/logo.svg";
import { Link } from 'react-router-dom';

const NavBarIntern = () => {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="Logo do gerador de recibos" />
      </Link>
      <ul>
        <li><a href="">Meus dados</a></li>
        <li><a href="">Meus recibos</a></li>
        <li><a href="">Sair</a></li>
      </ul>
    </nav>
  )
}

export default NavBarIntern;