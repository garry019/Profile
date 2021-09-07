import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import PageNotFound from './Error';
import Profile from './components/profile/Profile'

const Router = () => {
    return(
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Profile} />
                <Route component={PageNotFound} />
            </Switch>
        </HashRouter>
    )
}

export default Router;