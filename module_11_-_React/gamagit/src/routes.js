import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Repos from "./repos";
import Home from "./home"

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/repos" component={Repos}></Route>
            </Switch>
        </BrowserRouter>
    );
}
