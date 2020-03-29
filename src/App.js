import React from 'react';
import './styles/App.scss';
import AppHeader from "./components/containers/AppHeader";
import AppContainer from "./components/containers/AppContainer";
import {BrowserRouter as Router} from "react-router-dom";

const App = () => {
    return (
        <div className="App">
            <Router>
                <AppHeader/>
                <AppContainer/>
            </Router>
        </div>
    );
}

export default App;
