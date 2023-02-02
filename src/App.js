import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
//import $ from 'jquery'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home.js'
/* import Decor_1 from './images/decor-1.svg' */
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
        </Routes>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
