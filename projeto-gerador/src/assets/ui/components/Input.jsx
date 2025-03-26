import React from "react";

const Input = ({ type, id, name, label }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} name={name} id={id} />
    </div>
  );
};

export default Input;
