import React from "react";
import NavBarIn from "../ui/components/NavBarIn";

const ReciptGenerator = () => {
  return (
    <>
      <NavBarIn />
      <div>
        <h1>Bem-vindo ao gerador de recibo, Damião Souza</h1>
        <h2>Abaixo informe o valor do recibo</h2>
      </div>
      <table className="generator-box">
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
            <td>Damião Souza da Silva</td>
            <td>Pagador</td>
            <td>
              <hr />
            </td>
            <td>João Barros Silva</td>
            <td>Recebedor</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}>23/02/2025 - 18:09 - Domingo</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default ReciptGenerator;
