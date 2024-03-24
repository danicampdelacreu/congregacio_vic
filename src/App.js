import './App.css';
import React from 'react';
import  { BrowserRouter , Routes , Route } from 'react-router-dom';

import Header from'./components/header/Header';
import Footer from './components/footer/Footer';

import Historia from './routes/historia/Historia';
import Home from './routes/home/Home';
import Noticias from './routes/noticias/Noticias';
import Galeria from './routes/galeria/Galeria';
import Informacion from './routes/informacion/Informacion';
import Donativo from './routes/donativo/Donativo';
import FAQS from './routes/FAQS/FAQS';
import Aceptacion from './routes/aceptacion/Aceptacion';
import Proceso from './routes/processo/Processo';
import Espiritual from './routes/espiritual/Espiritual';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element = { <Home/> } />
        <Route path='/historia' element = { <Historia/> }/>
        <Route path='/donativo' element = { <Donativo/> }/>
        <Route path='/noticias' element = { <Noticias/> }/>
        <Route path='/galeria' element = { <Galeria/> }/>
        <Route path='/informacion' element = { <Informacion/> }/>
        <Route path='/faqs' element = { <FAQS/> } />
        <Route path='/aceptacion' element = { <Aceptacion/> } />
        <Route path='/processo' element = { <Proceso/> } />
        <Route path='/espiritual' element = { <Espiritual/> } />
      </Routes>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
// Terminar proyecto en consola npm run build 
// NETLIFY web subidas actualizaciones siempre subir carpeta build 
// NOMINALIA domini www.elsdolorsdevic.cat
// EMAILJS programa de correo electronico
// GOOGLE Search Controle  Posicio domini
