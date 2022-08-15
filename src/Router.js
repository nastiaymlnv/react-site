import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';

import Catalog from './pages/Catalog/Catalog';
import SingleProductView from "./pages/SingleProductView/SingleProductView";
import Cart from "./pages/Cart/Cart";

const Router = () => {
    return (
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
            <Redirect to={"/"} />
        </Switch>
        )
};

export default Router;