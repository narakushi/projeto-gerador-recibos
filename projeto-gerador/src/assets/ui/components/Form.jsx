import React from "react";
import Button from "./Button";
import Input from "./Input";
import "../styles/Form.css";

const Form = ({ data }) => {
  return (
    <form action="#" className="form">
      <section className="form__content">
        <h2>Comece informando seus dados para cadastro</h2>
        <div className="form__container-input">
          {data.map((inputs) => (
            <div className="form__sub-container">
              {inputs.map((input) => (
                <Input {...input} />
              ))}
            </div>
          ))}
        </div>
        <Button text="Inserir dados do recebedor" icon=">" url="/register-step-two" />
      </section>
    </form>
  );
};

export default Form;
