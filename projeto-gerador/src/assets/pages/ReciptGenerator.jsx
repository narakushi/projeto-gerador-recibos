import React from "react";
import NavBarIn from "../ui/components/NavBarIn";
import "../ui/styles/ReciptGenerator.css";
import Title from "../ui/components/Title";

const ReciptGenerator = () => {
  return (
    <>
      <NavBarIn />
      <main className="generator-box">
        <div className="generator-box__texts">
          <Title text="Bem-vindo ao gerador de recibo, Damião Souza" />
          <h2>Abaixo informe o valor do recibo</h2>
        </div>
        <table className="generator-box__table">
          <thead className="generator-box__header">
            <tr>
              <th>Recibo nº 1</th>
              <th>
                Valor <input type="text" value="R$ 2000,00" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={2}>
                Recebi do Srº. Damião Souza da Silva, CPF 273.523.508-45,
                residente na Rua X, Bairro Y, São Borja-RS, CEP XXXXX-XXX, a
                importância de R$2000,00 reais, referente à venda do imóvel
                localizado na Rua X, Bairro Y, São Borja-RS, CEP XXXXX-XXX.
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                O pagamento foi efetuado para o Srº. João Silva Barros , CPF
                273.523.508-45, residente na Rua X, Bairro Y, São Borja-RS, CEP
                XXXXX-XXX. através do método de pagamento PIX, registrado em
                comprovante.
              </td>
            </tr>
            <tr>
              <td>
                <hr />
              </td>
              <td>
                <hr />
              </td>
            </tr>
            <tr>
              <td>Damião Souza da Silva</td>
              <td>João Barros Silva</td>
            </tr>
            <tr>
              <td>Pagador</td>
              <td>Recebedor</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2}>23/02/2025 - 18:09 - Domingo</td>
            </tr>
          </tfoot>
        </table>
      </main>
    </>
  );
};

export default ReciptGenerator;
