import React from "react";
import Button from "./Button";
import Input from "./Input";

const Form = ({ data }) => {
  return (
    <form action="">
      <h2>Comece informando seus dados para cadastro</h2>
      <div>
        {data.map((inputs) => (
          <div>{inputs.map((input) => <Input {...input} />)}</div>
        ))}
      </div>

      <Button text="Inserir dados do recebedor" icon=">" />
    </form>
  );
};

export default Form;
