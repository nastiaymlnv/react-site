import React from "react";
import {BrowserRouter} from 'react-router-dom';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Router from './Router';
import './App.css';

function App() {
  return <BrowserRouter>
      <Header></Header>
      <Router></Router>
      <Footer></Footer>
    </BrowserRouter>
}

export default App;
