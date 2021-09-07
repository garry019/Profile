import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from './Error';
import Profile from './components/profile/Profile'

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Profile} />
                <Route component={PageNotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;