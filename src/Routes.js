import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import NotFound from "./components/organisms/NotFound";
import MoviesPage from "./components/pages/MoviesPage";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact render={() => <Redirect to="/movies/popular"/>}/>
            <Route path="/movies/:type" component={MoviesPage}/>
            <Route path="*" component={NotFound}/>
        </Switch>
    )
}

export default Routes