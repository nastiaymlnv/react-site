import React from "react";
import { BrowserRouter } from 'react-router-dom';

import Catalog from './pages/Catalog/Catalog';
import SingleProductView from "./pages/SingleProductView/SingleProductView";
import Cart from "./pages/Cart/Cart";

import './App.css';
import { Route, Switch } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <Catalog />
        </Route>
        <Route exact path={"/single-view/:id"}>
          <SingleProductView />
        </Route>
        <Route exact path={"/cart"}>
          <Cart />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
