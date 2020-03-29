import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import NotFound from "./components/organisms/NotFound";
import MoviesPage from "./components/pages/MoviesPage";

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/movies/:type" exact component={MoviesPage}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </Router>
    )
}

export default Routes