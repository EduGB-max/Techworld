import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FiSmartphone, FiMonitor } from 'react-icons/fi';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loja from './loja'; 
import './App.css';


function TecnologiasCarousel() {
  const imageStyles = {
    maxWidth: '100%', // Define a largura máxima como 100% do tamanho do elemento pai
    maxHeight: '500px', // Define a altura máxima como 400px
  };

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://navegantes.net.br/wp-content/uploads/2020/06/2019-01-21.png"
          alt="Primeira tecnologia"
          style={imageStyles} // Aplicando estilos à imagem
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://weduu.com/wp-content/uploads/2022/11/tecnologia-para-aumentar-as-vendas.jpg"
          alt="Segunda tecnologia"
          style={imageStyles} // Aplicando estilos à imagem
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://blog.cielo.com.br/wp-content/uploads/2022/03/cielo-tecnologia-inovacao-negocios.jpg"
          alt="Terceira tecnologia"
          style={imageStyles} // Aplicando estilos à imagem
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://geofusion.com.br/wp-content/uploads/2015/10/GettyImages-519515855-1-e1612211919528.jpg"
          alt="Quarta tecnologia"
          style={imageStyles} // Aplicando estilos à imagem
        />
      </Carousel.Item>
    </Carousel>
  );
}

// Restante do código permanece inalterado


function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tech World</h1>
        <p>Nossa Loja de eletrônicos irá te conquistar</p>
      </header>

      <section className="Info-section">
        <div className="Icon-container">
          <FiMonitor className="Icon" />
          <h2>Computadores</h2>
        </div>

        <br />
        <br />
        <br />

        <div className="Icon-container">
          <FiSmartphone className="Icon" />
          <h2>Celulares</h2>
        </div>
      </section>

      <section className="Data-section">
        <h2>E muito mais!</h2>
        <TecnologiasCarousel /> 
       < br></br>
        <Link to="/loja">
          <button>Entrar</button>
        </Link>
      </section>
    </div>
  );
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loja" element={<Loja />} /> {/* Rota para o componente Loja */}
      </Routes>
    </Router>
  );
}
export default App;
