import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "../styles/HamburguerMenu.css";
import Dropdown from "./Dropdown";
import Button from './Button';

const HamburguerMenu = ({ open, setOpen }) => {
  return (
    <>
      <div className="menu-h" onClick={setOpen}>
        <AiOutlineMenu />
      </div>

      {open && (
        <Dropdown>
          <Button customClass="button-variant" text="Entrar" />
          <Button text="Fazer cadastro" />
        </Dropdown>
      )}
    </>
  );
};

export default HamburguerMenu;
