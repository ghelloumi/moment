import React from 'react';
import './styles/App.scss';
import AppHeader from "./components/containers/AppHeader";
import AppContainer from "./components/containers/AppContainer";

const App = () => {
    return (
        <div className="App">
            <AppHeader/>
            <AppContainer/>
        </div>
    );
}

export default App;
