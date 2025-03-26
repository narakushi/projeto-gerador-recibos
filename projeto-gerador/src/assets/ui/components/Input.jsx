import React from "react";
import "../styles/Input.css";

const Input = ({ type, id, name, label }) => {
  return (
    <div className="container-input">
      <label className="container-input__label" htmlFor={id}>{label}</label>
      <input className="container-input__input" type={type} name={name} id={id} />
    </div>
  );
};

export default Input;
