import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
//import $ from 'jquery'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home.js'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact';


/* import { useDispatch, useSelector } from 'react-redux';
import { Incrementar, ChangeDescription } from './reducers/itemReducer'; */

function App() {

  useEffect(() => {
    //...
  }, []);

  /* const state = useSelector( state => state);
  const dispatch = useDispatch();

  const example = () => {
    dispatch(Incrementar(5));
    dispatch(ChangeDescription('Descripcion Cambiada'));
  } */

  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Navbar />
        
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/about-me' element={<About />} />
          <Route exact path='/portfolio' element={<Portfolio />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
