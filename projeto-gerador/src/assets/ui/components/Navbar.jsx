import React, { use } from "react";
import logo from "../imgs/logo.svg";
import Button from "../components/Button";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import HamburguerMenu from "./HamburguerMenu";
import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__content">
        <Link to="/" className="navbar__content-img">
          <img src={logo} alt="" />
        </Link>
        <div className="navbar__content-btns">
          <Button text="Entrar" customClass="button-variant" />
          <div className="navbar__content__pipe"></div>
          <Button text="Fazer cadastro" />
        </div>
        <HamburguerMenu open={open} setOpen={() => setOpen(!open)} />
      </div>
    </nav>
  );
};

export default NavBar;
