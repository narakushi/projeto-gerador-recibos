import React from 'react';
import logo from "../imgs/logo.svg";
import { Link } from 'react-router-dom';
import "../styles/NavBarIn.css";

const NavBarIn = () => {
  return (
    <nav className='navbar-in'>
      <Link to="/">
        <img src={logo} alt="Logo do gerador de recibos" />
      </Link>
      <ul className='navbar-in__itens'>
        <li className='navbar-in__item'><a href="">Meus dados</a></li>
        <li className='navbar-in__item'><a href="">Meus recibos</a></li>
        <li className='navbar-in__item'><a href="">Sair</a></li>
      </ul>
    </nav>
  )
}

export default NavBarIn;