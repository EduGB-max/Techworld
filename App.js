import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FiSmartphone, FiMonitor } from 'react-icons/fi';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loja from './loja'; 
import Carro from './carro';
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
          src="https://s2-techtudo.glbimg.com/fgISkUGvWWkmPusdzBqo0q4or1I=/0x0:3876x2579/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/g/v/z6kOIMTGqdKvsBDmfoBg/cadeiragamer.jpeg"
          alt="Primeira tecnologia"
          style={imageStyles} // Aplicando estilos à imagem
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.tecnobreak.com/wp-content/uploads/8-de-los-10-celulares-mas-vendidos-en-el-mundo.png"
          alt="Segunda tecnologia"
          style={imageStyles} // Aplicando estilos à imagem
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/fotos-gratis/homem-caucasiano-jogando-acao-no-console-da-tv_482257-21286.jpg"
          alt="Terceira tecnologia"
          style={imageStyles} // Aplicando estilos à imagem
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.0/c_scale,w_400/ncom/en_US/switch/site-design-update/oled-model-promo"
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
        <Route path="/carro" element={<Carro />} />
        <Route path="/loja" element={<Loja />} /> {/* Rota para o componente Loja */}
      </Routes>
    </Router>
  );
}
export default App;