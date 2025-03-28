import React from "react";
import Button from "./Button";
import Input from "./Input";
import "../styles/Form.css";

const Form = ({ data, subText, btnText, url, icon }) => {
  return (
    <form action="#" className="form">
      <section className="form__content">
        <h2>{subText}</h2>
        <div className="form__container-input">
          {data.map((inputs) => (
            <div className="form__sub-container">
              {inputs.map((input) => (
                <Input {...input} />
              ))}
            </div>
          ))}
        </div>
        <Button text={btnText} icon={icon} url={url} />
      </section>
    </form>
  );
};

export default Form;
