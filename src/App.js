import './App.css';
import React from 'react';
import  { BrowserRouter , Routes , Route } from 'react-router-dom';

import Header from'./components/header/Header';
import Footer from './components/footer/Footer';

import Historia from './routes/historia/Historia';
import Home from './routes/home/Home';
import Noticies from './routes/noticias/Noticias';
import Galeria from './routes/galeria/Galeria'
import Informacio from './routes/informacion/informacion'
import Donatiu from './routes/donatiu/Donatiu'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element = { <Home/> } />
        <Route path='/historia' element = { <Historia/> }/>
        <Route path='/donatiu' element = { <Donatiu/> }/>
        <Route path='/noticies' element = { <Noticies/> }/>
        <Route path='/galeria' element = { <Galeria/> }/>
        <Route path='/informacio' element = { <Informacio/> }/>
      </Routes>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
