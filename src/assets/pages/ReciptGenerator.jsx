import React from "react";
import NavBarIn from "../ui/components/NavBarIn";
import "../ui/styles/ReciptGenerator.css";
import Title from "../ui/components/Title";
import "../ui/styles/ReciptGenerator.css";

const ReciptGenerator = () => {
  return (
    <>
      <NavBarIn />
      <main className="generator-box">
        <div className="generator-box__texts">
          <Title text="Bem-vindo ao gerador de recibo, Damião Souza" />
          <h2>Abaixo informe o valor do recibo</h2>
        </div>
        <div className="generator-box__table">
          <div className="generator-box__header">
            <div className="generator-box__header-child">Recibo nº 01</div>
            <div className="generator-box__header-child">
              <span>Valor</span>
              <input type="text" name="" id="" value="R$ 2000,00" />
            </div>
          </div>
          <div className="generator-box__body">
            <div className="generator-box__content">
              <p>
                Recebi do Srº. Damião Souza da Silva, CPF 000.000.000-00,
                residente na Rua X, Bairro Y, São Borja-RS, CEP XXXXX-XXX, a
                importância de R$2000,00 reais, referente à venda do imóvel
                localizado na Rua X, Bairro Y, São Borja-RS, CEP XXXXX-XXX.
              </p>
              <p>
                O pagamento foi efetuado para o Srº. João Silva Barros , CPF
                000.000.000-00, residente na Rua X, Bairro Y, São Borja-RS, CEP
                XXXXX-XXX. através do método de pagamento PIX, registrado em
                comprovante.
              </p>
            </div>
            <hr />
            <div className="generator-box__components">
              <div className="generator-box__component-child">
                <div></div>
                <p>Damião X da Y</p>
                <p>Pagador</p>
              </div>
              <div className="generator-box__component-child">
                <div></div>
                <p>João Z da S</p>
                <p>Recebedor</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ReciptGenerator;
