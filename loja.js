// Loja.js

import React from 'react';
import { Link } from 'react-router-dom';

function Loja() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Itens</h1>
      </header>
      <br />
      <br />
      <h1>Nintendo Switch</h1>
      <img src="https://cdn.awsli.com.br/600x450/948/948792/produto/125642318/60c5ab9570.jpg" alt="Nintendo Switch" />
      <h2>R$ 1800,00</h2>
      <p>Grande desconto!</p>
      <Link to="/carro">
        <button>Comprar</button>
      </Link>
    </div>
  );
}

export default Loja;
