import React from 'react';
import './AsideStep.css';

export default function AsideStep() {
  return (
    <div className="container__side">
      <aside>
        <ol className="steps__list">
          <li>
            <spam>Step 1</spam>
            Suas Informações
          </li>
          <li>
            <spam>Step 2</spam>
            Selecione o Plano
          </li>
          <li>
            <spam>Step 3</spam>
            Adicionais
          </li>
          <li>
            <spam>Step 4</spam>
            Resumo
          </li>
        </ol>
      </aside>
    </div>
  )
}